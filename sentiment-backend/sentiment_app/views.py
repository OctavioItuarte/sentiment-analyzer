from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from .models import Comment
from .serializers import CommentSerializer
from .utils import analyze_sentiment  # Asegurate de importar si lo pusiste en utils.py

class SentimentAnalysisView(APIView):
    def post(self, request):
        figure = request.data.get("figure")
        comments = request.data.get("comments", [])

        results = []
        stats = {"POSITIVE": 0, "NEUTRAL": 0, "NEGATIVE": 0}

        for text in comments:
            label = analyze_sentiment(text)
            stats[label] += 1
            Comment.objects.create(text=text, figure=figure, predicted_sentiment=label)
            results.append({"text": text, "sentiment": label})

        total = len(comments)
        pie_data = {k: round((v / total) * 100, 2) for k, v in stats.items()} if total else {}

        most_positive = next((r for r in results if r['sentiment'] == "POSITIVE"), None)
        most_negative = next((r for r in results if r['sentiment'] == "NEGATIVE"), None)

        return Response({
            "stats": pie_data,
            "total": total,
            "most_positive": most_positive,
            "most_negative": most_negative,
            "results": results,
        })
    
class CommentListView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        queryset = Comment.objects.all()
        figure = self.request.query_params.get('figure')
        if figure:
            queryset = queryset.filter(figure__icontains=figure)
        return queryset.order_by('-created_at')