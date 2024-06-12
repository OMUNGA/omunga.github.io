import {
  getDownloadURL,
  ref as firebaseRef,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/services/firebase";

interface IImageUpload {
  success: number;
  file: {
    url: string;
  };
}

export function useFile() {
  async function uploadImage(
    file: File,
    storedFile?: string
  ): Promise<IImageUpload> {
    await deleteImage(storedFile as string);

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

  async function deleteImage(image: string) {
    try {
      const desertRef = firebaseRef(storage, image);
      await deleteObject(desertRef);
    } catch (error) {
      console.log(error);
    }
  }

  return { uploadImage };
}
