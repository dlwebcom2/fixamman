export default function TechnicianBanner() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/appliance-repair-technician-working-on-refrigerato.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Fix JO - مركز صيانة عمان المعتمد</h2>
        <a
          href="tel:0781990001"
          className="text-3xl md:text-4xl font-bold text-primary hover:text-red-400 transition-colors"
        >
          0781990001
        </a>
      </div>
    </section>
  )
}
