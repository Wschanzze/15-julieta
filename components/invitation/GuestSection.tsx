import ButterflyDivider from "./ButterflyDivider"

export default function GuestSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        <p className="text-base font-light italic text-muted-foreground">
          Nos encanta compartir este momento con vos. ¡Te esperamos!
        </p>
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}
