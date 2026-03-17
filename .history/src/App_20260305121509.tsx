import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link, Route, Routes } from "react-router-dom"
import { Mic, Sparkles } from "lucide-react"

import { Button, buttonVariants } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"

const products = [
  {
    name: "Teleférico Vive el Parque",
    price: "$8.500 CLP",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    detail: "Experiencia panorámica",
  },
  {
    name: "Teleférico Ida y Vuelta",
    price: "$6.800 CLP",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    detail: "Cabina continua",
  },
  {
    name: "Teleférico Solo Ida",
    price: "$4.200 CLP",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    detail: "Bajada libre",
  },
  {
    name: "Funicular Vive el Parque",
    price: "$7.900 CLP",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    detail: "Viaje histórico",
  },
  {
    name: "Funicular Ida y Vuelta",
    price: "$6.200 CLP",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    detail: "Sube y baja",
  },
  {
    name: "Funicular Solo Ida",
    price: "$3.900 CLP",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    detail: "Bajada a pie",
  },
  {
    name: "Parque Aventura Entrada General",
    price: "$12.500 CLP",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    detail: "Circuitos y canopy",
  },
  {
    name: "Parque Aventura Full Day",
    price: "$18.900 CLP",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    detail: "Acceso ilimitado",
  },
  {
    name: "Combo Teleférico + Parque",
    price: "$15.900 CLP",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    detail: "Entrada doble",
  },
  {
    name: "Combo Funicular + Parque",
    price: "$14.900 CLP",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    detail: "Entrada doble",
  },
  {
    name: "Ticket Vive el Parque Familiar",
    price: "$26.500 CLP",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
    detail: "4 personas",
  },
  {
    name: "Pase Fotográfico Mirador",
    price: "$2.900 CLP",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    detail: "Souvenir digital",
  },
]

type AccountBadgeProps = {
  onOpenDetails: () => void
}

function AccountBadge({ onOpenDetails }: AccountBadgeProps) {
  return (
    <div className="fixed right-4 top-16 z-20 flex flex-col items-end gap-3 rounded-2xl border bg-white/80 px-5 py-4 shadow-lg backdrop-blur-sm ring-1 ring-black/5 sm:right-6 sm:top-5 sm:flex-row sm:items-center sm:gap-4 sm:rounded-full sm:px-6 sm:py-3">
      <script type="module" src="C:\Users\DanielDiazMascaró\Desktop\api chat\FrontEnd\main.js"></script>
      <div className="text-right text-[11px] sm:text-sm">
        <p className="font-semibold text-foreground">Cuenta</p>
        <p className="text-muted-foreground">$560 en carrito</p>
        <p className="text-muted-foreground">4 artículos</p>
      </div>
      <Button
        className="h-10 rounded-full px-5 text-xs sm:h-11 sm:px-6 sm:text-sm"
        variant="destructive"
        onClick={onOpenDetails}
      >
        Comprar
      </Button>
    </div>
  )
}

function CatalogPage() {
  const [showAll, setShowAll] = useState(false)
  const visibleProducts = useMemo(
    () => (showAll ? products : products.slice(0, 3)),
    [showAll]
  )

  return (
    <section className="flex flex-col gap-10">
      <header className="space-y-2 text-center">
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="mx-auto w-full max-w-sm overflow-hidden">
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <span className="text-base font-semibold text-foreground">
                  {product.price}
                </span>
                <p className="text-sm text-muted-foreground">{product.detail}</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="destructive">
                  Agregar
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={() => setShowAll(true)}>
            Ver más
          </Button>
        </div>
      )}
    </section>
  )
}

function VoicePage() {
  const [recording, setRecording] = useState(false)

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center sm:gap-6">
      <Link
        to="/"
        className={buttonVariants({
          variant: "outline",
          className:
            "fixed left-4 top-4 z-20 rounded-full border bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground shadow-md hover:bg-muted sm:left-1/2 sm:-translate-x-1/2",
        })}
      >
        Volver al home
      </Link>
      <button
        className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg transition sm:h-24 sm:w-24 ${
          recording ? "animate-pulse-soft" : ""
        }`}
        onClick={() => setRecording((prev) => !prev)}
        aria-pressed={recording}
      >
        <Mic className="h-7 w-7 sm:h-8 sm:w-8" />
        {recording && (
          <span className="absolute inset-0 rounded-full border border-destructive/40" />
        )}
      </button>

      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
        Háblame
      </p>

      <div
        className={`flex h-8 items-end gap-2 transition-opacity ${
          recording ? "opacity-100" : "opacity-0"
        }`}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={index}
            className="h-5 w-1.5 rounded-full bg-destructive/70 sm:h-6"
            style={{
              animation: `wave 1s ease-in-out ${index * 0.1}s infinite`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

function App() {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <AccountBadge onOpenDetails={() => setDetailsOpen(true)} />
        <AnimatePresence>
          {detailsOpen && (
            <motion.div
              className="fixed inset-0 z-30 flex items-center justify-center bg-black/30 px-4 pt-24 sm:pt-20"
              onClick={() => setDetailsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-sm rounded-3xl border bg-white p-5 shadow-2xl sm:max-w-md sm:p-6"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Carrito
                    </p>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Resumen de compra
                    </h2>
                  </div>
                  <button
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground hover:bg-muted"
                    onClick={() => setDetailsOpen(false)}
                    aria-label="Cerrar"
                  >
                    Cerrar
                  </button>
                </div>

                <div className="mt-6 space-y-4 text-sm text-foreground">
                  <div className="flex items-center justify-between">
                    <span>Teleférico Vive el Parque</span>
                    <span className="font-medium">$8.500 CLP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Funicular Ida y Vuelta</span>
                    <span className="font-medium">$6.200 CLP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Parque Aventura Entrada General</span>
                    <span className="font-medium">$12.500 CLP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Combo Teleférico + Parque</span>
                    <span className="font-medium">$15.900 CLP</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-lg font-semibold">$43.100 CLP</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    className="w-full"
                    variant="destructive"
                    onClick={() => setDetailsOpen(false)}
                  >
                    Comprar
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link
                  to="/hablame"
                  className={buttonVariants({
                    variant: "outline",
                    className:
                      "fixed left-4 top-4 z-20 rounded-full border bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground shadow-md hover:bg-muted sm:left-1/2 sm:-translate-x-1/2",
                  })}
                >
                  <Sparkles className="h-4 w-4" />
                  Hablar con una IA
                </Link>
                <CatalogPage />
              </>
            }
          />
          <Route path="/hablame" element={<VoicePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
