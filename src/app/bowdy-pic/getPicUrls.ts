import { urls } from "./picUrls";

export function getBowdyPicture(): string {
    return urls[Math.floor(Math.random() * urls.length)];
}
