export class DocumentPreviewController {

    constructor() {

        this._file = file;

    }

    getPreviewData() {

        return new Promise((s, f) => {

            switch(this._file) {

                case 'image/png':
                case 'image/jpeg':
                case 'image/jpg':
                case 'image/gif':
                    let reader = new FileReader();
                    reader.onload = e => {
                        s(reader.result);
                    }
                    reader.onerorr = e => {
                        f(e);
                    }
                    reader.readAsDataURL(file);
                break;

                case 'application/pdf':

                break;

                default:
                    f();
                    
            }

        });

    }

}