from django.urls import path
from .views import SentimentAnalysisView, CommentListView

urlpatterns = [
    path('sentiment/', SentimentAnalysisView.as_view()),
    path('comments/', CommentListView.as_view()),
]