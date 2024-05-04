export default class ImageTo64 {
  input;
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M19 14a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6v-6l5-5l5.59 5.59a2 2 0 0 0 2.82 0L21 19l5 5Zm0-4.83l-3.59-3.59a2 2 0 0 0-2.82 0L18 19.17l-5.59-5.59a2 2 0 0 0-2.82 0L6 17.17V6h20Z"/></svg>'
    };
  }

  render() {
    this.input = document.createElement('input')
    this.input.setAttribute("type", "file")
    this.input.setAttribute("accept", "image/*")
    this.input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        let imageUrl;
        reader.onload = (e) => {
          imageUrl = e.target.result;
          this.input.setAttribute("type", "image")
          this.input.setAttribute("src", imageUrl)
          this.input.removeAttribute("type")
          this.input.removeAttribute("accept")
          this.input
          this.input.outerHTML = this.input.outerHTML.replace(/input/g, 'img')

        };
        reader.readAsDataURL(file);
      }
    })
    return this.input;
  }
  save(blockContent) {
    return {
      url: blockContent.currentSrc
    }
  }
}