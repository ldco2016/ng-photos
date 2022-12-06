import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: "root",
})
export class PhotosService {
  constructor(private http: HttpClient) {
    // SecretKey: "eIkL0wPBBvW-l3DBLHrVXCYBqGitNzFqQ48_uS2MOCY",
  }

  getPhoto() {
    return this.http.get<UnsplashResponse>("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID 3majQuA0x4nylrQOkSFCoEemJRk0K6zje1wB8KwaPKs",
      },
    });
  }
}
