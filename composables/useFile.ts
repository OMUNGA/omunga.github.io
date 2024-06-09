import {
  getDownloadURL,
  ref as firebaseRef,
  uploadBytes,
} from "firebase/storage";
import { storage } from "@/services/firebase";

export function useFile() {
  async function uploadImage(file: File) {
    return new Promise(async (resolve, reject) => {
      try {
        const mountainsRef = firebaseRef(
          storage,
          `/images/${crypto.randomUUID()}-${
            file.name.split(".")[file.name.split(".").length - 1]
          }`
        );
        const snapshot = await uploadBytes(mountainsRef, file);
        const url = await getDownloadURL(snapshot.ref);

        // Resolve with the image data required by EditorJS
        resolve({
          success: 1,
          file: {
            url,
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  return { uploadImage };
}
