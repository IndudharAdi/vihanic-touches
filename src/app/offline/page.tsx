export default function OfflinePage() {
  return (
    <div className="h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-2xl font-semibold mb-2">You are offline</h1>
        <p className="text-gray-600">
          Don’t worry — you can still browse cached pages and your cart data
          will sync once you are back online.
        </p>
      </div>
    </div>
  );
}