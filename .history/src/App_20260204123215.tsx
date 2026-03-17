import { useMemo, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { Mic, Sparkles } from "lucide-react"

import { Button, buttonVariants } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"

const products = [
  {
    name: "Ruta Andina Secreta",
    price: "$145",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    detail: "3 días · Andes",
  },
  {
    name: "Islas de Coral Azul",
    price: "$220",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    detail: "2 noches · Caribe",
  },
  {
    name: "Sendero de Bosques Nublados",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    detail: "1 día · Reserva",
  },
  {
    name: "Safari del Desierto Rosa",
    price: "$260",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    detail: "4 horas · Dunas",
  },
  {
    name: "Crucero de Fiordos",
    price: "$310",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    detail: "1 noche · Norte",
  },
  {
    name: "Paseo en Globo Aurora",
    price: "$340",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    detail: "45 min · Valle",
  },
  {
    name: "Caminata a Laguna Espejo",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    detail: "6 horas · Sierra",
  },
  {
    name: "Tour de Luces Urbanas",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
    detail: "3 horas · Ciudad",
  },
  {
    name: "Kayak en Manglares",
    price: "$160",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    detail: "2 horas · Costa",
  },
  {
    name: "Ruta del Café Vivo",
    price: "$130",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    detail: "1 día · Montaña",
  },
  {
    name: "Santuario de Cascadas",
    price: "$190",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    detail: "5 horas · Selva",
  },
  {
    name: "Observatorio Estelar",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    detail: "Noche · Altiplano",
  },
]

function AccountBadge() {
  return (
    <div className="fixed right-6 top-5 z-20 flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-lg ring-1 ring-black/5">
      <div className="text-right text-xs">
        <p className="font-semibold text-foreground">Cuenta</p>
        <p className="text-muted-foreground">$560 en carrito</p>
      </div>
      <Button className="h-9 rounded-full px-4 text-xs" variant="destructive">
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
        <h1 className="text-3xl font-semibold md:text-4xl">
          Conoce el Cerro San Cristóbal
        </h1>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <Card key={product.name} className="mx-auto w-full max-w-sm overflow-hidden">
            <div className="h-56 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{product.name}</CardTitle>
                <span className="text-base font-semibold text-foreground">
                  {product.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{product.detail}</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="destructive">
                Agregar
              </Button>
            </CardContent>
          </Card>
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
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <Link
        to="/"
        className={buttonVariants({
          variant: "outline",
          className:
            "fixed left-1/2 top-5 z-20 -translate-x-1/2 rounded-full bg-white text-sm text-foreground shadow-lg ring-1 ring-black/5 hover:bg-muted",
        })}
      >
        Volver al home
      </Link>
      <button
        className={`relative flex h-24 w-24 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg transition ${
          recording ? "animate-pulse-soft" : ""
        }`}
        onClick={() => setRecording((prev) => !prev)}
        aria-pressed={recording}
      >
        <Mic className="h-8 w-8" />
        {recording && (
          <span className="absolute inset-0 rounded-full border border-destructive/40" />
        )}
      </button>

      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Háblame
      </p>

      {recording && (
        <div className="flex items-end gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className="h-6 w-1.5 rounded-full bg-destructive/70"
              style={{
                animation: `wave 1s ease-in-out ${index * 0.1}s infinite`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-28">
        <AccountBadge />
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
                      "fixed left-1/2 top-5 z-20 -translate-x-1/2 rounded-full bg-white text-sm text-foreground shadow-lg ring-1 ring-black/5 hover:bg-muted",
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
