export function useFile() {
  async function imageTo64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target) {
            resolve(e.target.result as string);
          } else {
            reject(new Error("Failed to read file"));
          }
        };
        reader.onerror = (e) => {
          reject(new Error("FileReader error"));
        };
        reader.readAsDataURL(file);
      } else {
        resolve("");
      }
    });
  }

  return { imageTo64 };
}
