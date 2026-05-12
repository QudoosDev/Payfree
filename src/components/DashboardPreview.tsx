export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[1024px] mx-auto mt-8 flex justify-center">
      <img 
        src="/dashboard.png" 
        alt="Payfree Dashboard Preview" 
        className="w-full h-auto object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
}
