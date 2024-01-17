import SignatureCanvas from "react-signature-canvas";
function ESignaturePad() {
  return (
    <div className="app">
      <SignatureCanvas penColor='green'
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
    </div>
  );
}
export default ESignaturePad;