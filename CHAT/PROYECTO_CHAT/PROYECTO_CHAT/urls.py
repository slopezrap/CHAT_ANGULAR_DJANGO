
from django.contrib import admin
from django.urls import path, include
from APP_CHAT.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('chat/', include('APP_CHAT.urls')),
]
