import Button from "./Button";

export default function Modal({
  open, title, children, confirmText = "OK", cancelText, onConfirm, onCancel, confirmVariant = "primary",
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="animate-pop w-full max-w-sm rounded-2xl bg-cream p-6 shadow-xl">
        <h3 className="mb-2 text-xl font-extrabold text-brown">{title}</h3>
        <div className="mb-5 text-sm">{children}</div>
        <div className="flex justify-end gap-2">
          {cancelText && <Button variant="outline" onClick={onCancel}>{cancelText}</Button>}
          <Button variant={confirmVariant} onClick={onConfirm}>{confirmText}</Button>
        </div>
      </div>
    </div>
  );
}
