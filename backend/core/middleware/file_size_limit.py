from django.core.exceptions import SuspiciousOperation
from django.utils.deprecation import MiddlewareMixin

MAX_UPLOAD_SIZE = 20 * 1024 * 1024  # 2MB


class FileSizeLimitMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.method in ['POST', 'PUT'] and request.FILES:
            for file in request.FILES.values():
                if file.size > MAX_UPLOAD_SIZE:
                    raise SuspiciousOperation("File too large. Max size is 2MB.")
