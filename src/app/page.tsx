"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, Phone, Instagram, MessageCircle, Menu, X, Star, Clock, Users } from "lucide-react"

// Importe a fonte Inter
import { Inter } from 'next/font/google';

// Defina a fonte para uso
const inter = Inter({ subsets: ['latin'] });

export default function CantinaLanzaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuDialogOpen, setIsMenuDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    order: "",
    delivery: "retirada",
    address: "",
  })

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Meu nome é ${formData.name}.\n\nPedido: ${formData.order}\n\nTipo: ${formData.delivery === "entrega" ? "Entrega" : "Retirada"}${formData.delivery === "entrega" && formData.address ? `\nEndereço: ${formData.address}` : ""}`
    const whatsappUrl = `https://wa.me/553599512496?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/cantina-lanza-logo.jpg"
                alt="Cantina Lanza Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection("hero")} className="nav-item text-gray-700 font-medium">
                  Início
                </button>
                <button onClick={() => scrollToSection("about")} className="nav-item text-gray-700 font-medium">
                  Sobre Nós
                </button>
                <button onClick={() => scrollToSection("menu")} className="nav-item text-gray-700 font-medium">
                  Cardápio
                </button>
                <button onClick={() => scrollToSection("contact")} className="nav-item text-gray-700 font-medium">
                  Contato
                </button>
                <button onClick={() => scrollToSection("gallery")} className="nav-item text-gray-700 font-medium">
                  Galeria
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-italian-green">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block px-3 py-2 text-gray-700 hover:text-italian-green w-full text-left transition-colors"
              >
                Galeria
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-overlay"></div>

       <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('/images/salao.jpg')`,
    }}
  ></div>

  <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className={`${inter.className} font-serif text-5xl md:text-7xl font-bold mb-2 leading-tight`}>
            Cantina <span className="text-italian-green">Lanza</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">Ristorante & Pizzeria</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Autêntica culinária italiana com pizzas artesanais, massas frescas e vinhos especiais. Uma experiência
            gastronômica única que transporta você diretamente para a Itália.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("menu")}
              className="bg-[#ce2b37] hover:bg-red-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Ver Cardápio
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#009246] hover:bg-green-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Fazer Pedido
            </Button>
          </div>
        </div>

        
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${inter.className}font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6`}>
                Nossa <span className="text-italian-green">História</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  A Cantina Lanza nasceu do sonho de trazer a autêntica culinária italiana para o Brasil. Fundada pela
                  família Lanza, nossa pizzaria combina receitas tradicionais passadas de geração em geração com
                  ingredientes frescos e de alta qualidade.
                </p>
                <p>
                  Cada pizza é preparada artesanalmente, garantindo o sabor único e a textura
                  perfeita que só a tradição italiana pode oferecer. Nosso ambiente acolhedor e familiar convida você a
                  viver uma experiência gastronômica inesquecível.
                </p>
                <p>
                  Além das famosas pizzas, oferecemos uma seleção especial de massas artesanais, pratos à la carte,
                  sobremesas irresistíveis e uma carta de vinhos cuidadosamente selecionada para harmonizar
                  perfeitamente com nossos pratos.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  className="bg-[#ce2b37] hover:bg-red-700 text-white btn-instagram shadow-lg"
                  onClick={() => window.open("https://instagram.com/cantinalanza", "_blank")}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Button>
                <Button
                  className="bg-[#009246] hover:bg-green-700 text-white btn-whatsapp shadow-lg"
                  onClick={() => window.open("https://wa.me/553599512496", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all" onClick={() => window.open("https://maps.app.goo.gl/w9mTNbxJTmGqmLZ98", "_blank")}>
                  <MapPin className="mr-2 h-4 w-4" />
                  Localização
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg h-48 w-full bg-cover bg-center">
                  <img src="./images/lasagna-bolog.jpg" alt="" className="object-cover h-full w-full rounded-lg"/>
                </div>
                <div className="rounded-lg h-40 w-full" >
                    <img src="./images/five-pizzas.jpg" alt="" className="object-cover h-full w-full rounded-lg"/>
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className=" rounded-lg h-[400px] w-full">
 <img src="./images/pizza-margherita.jpg" alt="" className="object-cover h-full w-full rounded-lg"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
          <h2 className={`${inter.className} font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
              Nosso <span className="text-italian-green">Cardápio</span>
            </h2>

          <h3 className={`${inter.className} font-serif text-2xl font-medium text-center text-gray-700 mb-8`}>
             <span className="text-italian-red">No cardápio</span> você encontra:
            </h3>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {/* Pizza Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/images/pizza-margherita.jpg"
                    alt="Pizzas Artesanais"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Pizzas Artesanais</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Massa fermentada naturalmente, molho de tomate caseiro e ingredientes frescos de alta qualidade
                  </p>
                </div>
              </div>

              {/* Pasta Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/images/lasagna-bolog.jpg"
                    alt="Massas Artesanais"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Massas Artesanais</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Massas preparadas diariamente com ovos frescos, sêmola italiana e molhos especiais da casa
                  </p>
                </div>
              </div>

              {/* Wine Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image 
                   src="/images/vinhos.png"
                    alt="Pratos à La Carte"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Vinhos Especiais</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Carta de vinhos italianos das melhores regiões, cuidadosamente selecionados para harmonizar
                  </p>
                </div>
              </div>

              {/* À La Carte Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  
                  <Image
                    src="/images/truta.jpg"
                    alt="Pratos à La Carte"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
               
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Pratos à La Carte</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Pratos principais da culinária italiana tradicional com ingredientes importados
                  </p>
                </div>
              </div>
            </div>

          
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra os sabores autênticos da Itália em cada prato cuidadosamente preparado
            </p>

            <Dialog open={isMenuDialogOpen} onOpenChange={setIsMenuDialogOpen}>
              <DialogTrigger asChild>
                <Button className="mt-6 bg-[#ce2b37] hover:bg-red-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
                  Ver Cardápio Completo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] overflow-y-auto">
                 <DialogHeader>
                  <DialogTitle className="font-serif text-3xl text-center">Cardápio Cantina Lanza</DialogTitle>
                  <DialogDescription className="text-center text-lg">
                    Confira todas as nossas especialidades
                  </DialogDescription>
                </DialogHeader>
               <div className="space-y-12 mt-8">
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="font-serif text-2xl font-bold text-italian-green mb-4">Pizzas e Massas</h3>
                      <div className="relative w-full max-w-4xl mx-auto">
                        <Image
                          src="/images/cardapio-frente.jpg"
                          alt="Cardápio - Pizzas"
                          width={800}
                          height={1200}
                          className="w-full h-auto rounded-lg border shadow-lg"
                          priority
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="font-serif text-2xl font-bold text-italian-red mb-4">Porções, Vinhos e Bebidas</h3>
                      <div className="relative w-full max-w-4xl mx-auto">
                        <Image
                          src="/images/cardapio-verso.jpg"
                          alt="Cardápio - Porções e Bebidas"
                          width={800}
                          height={1200}
                          className="w-full h-auto rounded-lg border shadow-lg"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-italian-green pt-12">
                    <h3 className="font-serif text-3xl font-bold text-center text-italian-green mb-12">
                      Outros Sabores da Casa
                    </h3>

                    <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
                      {/* Porções */}
                      <div className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-lg border border-italian-green/20">
                        <div className="text-center mb-8">
                          <div className="w-16 h-16 bg-italian-red rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🍽️</span>
                          </div>
                          <h4 className="font-serif text-2xl font-bold text-italian-red">Porções Especiais</h4>
                          <p className="text-gray-600 mt-2">Outras porções e acompanhamentos</p>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-italian-green">
                            <h5 className="font-bold text-lg text-gray-900 mb-1">Arroz</h5>
                            <p className="text-gray-600 text-sm mb-2">
                              Arroz para acompanhar seu prato principal
                            </p>
                            <div className="text-right">
                              <span className="font-bold text-xl text-italian-green">R$15,00</span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-italian-green">
                            <h5 className="font-bold text-lg text-gray-900 mb-1">Arroz com Brócolis</h5>
                            <p className="text-gray-600 text-sm mb-2">Arroz com brócolis frescos e alho</p>
                            <div className="text-right">
                              <span className="font-bold text-xl text-italian-green">R$20,00</span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-italian-green">
                            <h5 className="font-bold text-lg text-gray-900 mb-1">Salgados (6 unidades)</h5>
                            <p className="text-gray-600 text-sm mb-2">Coxinha, risoles de carne e de frango</p>
                            <div className="text-right">
                              <span className="font-bold text-xl text-italian-green">R$35,00</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sobremesas */}
                      <div className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-lg border border-italian-red/20">
                        <div className="text-center mb-8">
                          <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🍰</span>
                          </div>
                          <h4 className="font-serif text-2xl font-bold text-italian-green">Sobremesas Artesanais</h4>
                          <p className="text-gray-600 mt-2">Doces especiais preparados pela família</p>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-italian-red">
                            <h5 className="font-bold text-lg text-gray-900 mb-1">Petit Gateau</h5>
                            <p className="text-gray-600 text-sm mb-2">
                              Bolo quente com cauda de brigadeiro e sorvete de creme
                            </p>
                            <div className="text-right">
                              <span className="font-bold text-xl text-italian-red">R$15,00</span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-italian-red">
                            <h5 className="font-bold text-lg text-gray-900 mb-1">Trufas</h5>
                            <p className="text-gray-600 text-sm mb-2">
                              Trufas de morango com creme e outras variedades (Consultar no balcão)
                            </p>
                            <div className="text-right">
                              <span className="font-bold text-xl text-italian-red">R$ 10,00 /  R$ 9,00</span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-italian-red">
                            <h5 className="font-bold text-lg text-gray-900 mb-1">Palha Italiana</h5>
                            <p className="text-gray-600 text-sm mb-2">
                              Doce tradicional italiano com camadas de biscoito e chocolate ou ninho
                            </p>
                            <div className="text-right">
                              <span className="font-bold text-xl text-italian-red">R$ 9,00</span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-italian-red">
                            <h5 className="font-bold text-lg text-gray-900 mb-1">Morango do Amor</h5>
                            <p className="text-gray-600 text-sm mb-2">Morangos com creme e calda de morango</p>
                            <div className="text-right">
                              <span className="font-bold text-xl text-italian-red">R$ 12,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="mb-12">
          
            <h3 className="mt-12 text-2xl font-bold text-center text-gray-700 mb-8">Na Cantinza Lanza <span className="text-italian-green">você encontra:</span></h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Family Environment Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/images/salao.jpg"
                    alt="Ambiente familiar"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Ambiente Familiar</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Um espaço acolhedor e familiar, perfeito para momentos especiais com quem você ama
                  </p>
                </div>
              </div>

              {/* Fireplace Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/images/lareira.jpg"
                    alt="Lareira aconchegante"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Lareira Aconchegante</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Nos dias frios, nossa lareira cria um ambiente quente e atraente para toda a família
                  </p>
                </div>
              </div>

              {/* Authentic Experience Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80 ">
                  <Image
                    src="/images/tradicao-imagem.jpg"
                    alt="Imagem de uma experiência culinária autêntica na Cantina Lanza"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Experiência culinária de outro nível</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Tradições culinárias da família Lanza que trazem o verdadeiro sabor da Itália para você
                  </p>
                </div>
              </div>

              {/* Music Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  
<Image
                    src="/images/ambiente-musical.png"
                    alt="Ambiente Musical"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-serif text-2xl font-bold mb-2">Músicas relaxantes</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Noites especiais com um ambiente musical clássico e confortante
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${inter.className} font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
              Faça seu <span className="text-italian-green">Pedido</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entre em contato conosco pelo WhatsApp e desfrute dos sabores únicos da Cantina Lanza
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className={`${inter.className} text-2xl text-gray-900`}>Pedido via WhatsApp</CardTitle>
                  <CardDescription className="text-lg">
                    Preencha o formulário e envie seu pedido diretamente para nosso WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Digite seu nome"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Seu Pedido</label>
                      <Textarea
                        value={formData.order}
                        onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                        placeholder="Descreva seu pedido (pizzas, massas, bebidas, etc.)"
                        required
                        className="w-full h-24"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Pedido</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="retirada"
                            checked={formData.delivery === "retirada"}
                            onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
                            className="mr-2"
                          />
                          Retirada
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="entrega"
                            checked={formData.delivery === "entrega"}
                            onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
                            className="mr-2"
                          />
                          Entrega
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="comer"
                            checked={formData.delivery === "comer"}
                            onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
                            className="mr-2"
                          />
                          Comer na Cantina
                        </label>
                      </div>
                    </div>

                    {formData.delivery === "entrega" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Endereço para Entrega</label>
                        <Textarea
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Digite seu endereço completo"
                          className="w-full h-20"
                        />
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-[#009246] hover:bg-green-700 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Enviar Pedido via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-italian-green mr-3" />
                  <h3 className="font-serif text-xl font-bold">Contato Direto</h3>
                </div>
                <p className="text-gray-600 mb-4">Prefere falar diretamente conosco? Entre em contato pelo WhatsApp:</p>
                <Button
                  className="bg-[#009246] hover:bg-green-700 text-white w-full shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open("https://wa.me/553599512496", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  (35) 9951-2496
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-italian-green mr-3" />
                  <h3 className="font-serif text-xl font-bold">Localização</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rua Presidente Tancredo Neves, 136
                  <br />
                  Bairro Centro, Delfim Moreira - MG
                  <br />
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Qua-Dom: 18h às 23h</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Ambiente familiar</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Instagram className="h-6 w-6 text-italian-red mr-3" />
                  <h3 className="font-serif text-xl font-bold">Instagram</h3>
                </div>
                <p className="text-gray-600 mb-4">Acompanhe nossas novidades e promoções especiais:</p>
                <Button
                  className="bg-[#ce2b37] hover:bg-red-700 text-white w-full btn-instagram shadow-lg"
                  onClick={() => window.open("https://instagram.com/cantinalanza", "_blank")}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  @cantinalanza
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${inter.className} font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
              Nossa <span className="text-italian-red">Galeria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos pratos mais especiais e queridos pelos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pizza Mineira Card */}
            <div className="gallery-card group">
              <div className="gallery-image-container">
                <Image src="/images/mineira.jpg" alt="Pizza Mineira" fill className="gallery-image" />
              </div>
              <div className="gallery-content">
                <h3 className="gallery-title">Pizza Mineira</h3>
                <p className="gallery-description">
                  Deliciosa pizza de frango com catupiry, milho e bacon. É uma das mais pedidas pelos clientes!
                </p>
                <div className="gallery-badges mt-4">
                  <Badge className="badge-creation">Nossa Criação</Badge>
                  <Badge className="badge-popular">Preferida dos clientes</Badge>
                </div>
              </div>
            </div>

            {/* Torre de Batata Card */}
            <div className="gallery-card group">
              <div className="gallery-image-container">
                <Image src="/images/torre.jpg" alt="Torre de Batata" fill className="gallery-image" />
              </div>
              <div className="gallery-content">
                <h3 className="gallery-title">Torre de Batata</h3>
                <p className="gallery-description">
                  Generosa torre de batata frita com queijo mussarela, calabresa e bacon. 
                </p>
                <div className="gallery-badges mt-4">
                  <Badge className="badge-creation">Nossa Criação</Badge>
                  <Badge className="badge-popular">Serve toda a família</Badge>
                </div>
              </div>
            </div>

            {/* Pizza de Banana Card */}
            <div className="gallery-card group">
              <div className="gallery-image-container">
                <Image src="/images/banana.jpg" alt="Pizza de Banana" fill className="gallery-image" />
              </div>
              <div className="gallery-content">
                <h3 className="gallery-title">Pizza de Banana</h3>
                <p className="gallery-description">
                  Pizza doce com mussarela, banana, leite condensado e canela. 
                </p>
                <div className="gallery-badges mt-4">
                  <Badge className="badge-creation">Famosa</Badge>
                  <Badge className="badge-popular">Ótima sobremesa</Badge>
                </div>
              </div>
            </div>

            {/* Pizza Quatro Queijos Card */}
            <div className="gallery-card group">
              <div className="gallery-image-container">
                <Image src="/images/four-cheese.jpg" alt="Pizza Quatro Queijos" fill className="gallery-image" />
              </div>
              <div className="gallery-content">
                <h3 className="gallery-title">Pizza Quatro Queijos</h3>
                <p className="gallery-description">
                  Mozzarella, catupiry, parmesão e provolone em perfeita harmonia sobre nossa massa artesanal.
                </p>
                <div className="gallery-badges mt-4">
                  <Badge className="badge-creation">Clássica</Badge>
                  <Badge className="badge-popular">Os clientes amam</Badge>
                </div>
              </div>
            </div>

 {/* Pizza Portuguesa Card */}
            <div className="gallery-card group">
              <div className="gallery-image-container">
                <Image src="/images/portuguesa.jpg" alt="Pizza Portuguesa" fill className="gallery-image" />
              </div>
              <div className="gallery-content">
                <h3 className="gallery-title">Pizza Portuguesa</h3>
                <p className="gallery-description">
                  Tradicional pizza portuguesa com ingredientes únicos e um sabor marcante da Cantina Lanza. 
                </p>
                <div className="gallery-badges mt-4">
                  <Badge className="badge-creation">Especial</Badge>
                  <Badge className="badge-popular">Os clientes amam</Badge>
                </div>
              </div>
            </div>


 {/* Pizza Montada Card */}
            <div className="gallery-card group">
              <div className="gallery-image-container">
                <Image src="/images/montada.jpg" alt="Pizza Montada" fill className="gallery-image" />
              </div>
              <div className="gallery-content">
                <h3 className="gallery-title">Pizza Montada</h3>
                <p className="gallery-description">
                  Uma das pizzas mais famosas da Cantina Lanza, adiciona calabresa, cebola e alho à deliciosa frango com catupiry.
                </p>
                <div className="gallery-badges mt-4">
                  <Badge className="badge-creation">Saborosa</Badge>
                  <Badge className="badge-popular">Nossa criação</Badge>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/cantina-lanza-logo.jpg"
                  alt="Cantina Lanza Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Autêntica culinária italiana com pizzas artesanais, massas frescas e vinhos especiais. Uma experiência
                gastronômica única desde 1997.
              </p>
            </div>

            <div>
              <h3 className={`${inter.className} font-serif text-xl font-bold mb-4`}>Contato</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Rua Presidente Tancredo Neves, 136 - Bairro Centro</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(35) 9951-2496</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Qua-Dom: 18h às 23h</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-[#ce2b37] hover:bg-red-700 btn-instagram"
                  onClick={() => window.open("https://instagram.com/cantinalanza", "_blank")}
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  className="bg-[#009246] hover:bg-green-700 btn-whatsapp"
                  onClick={() => window.open("https://wa.me/553599512496", "_blank")}
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-300 mt-4 text-sm">
                Siga-nos para novidades, promoções especiais e os bastidores da nossa cozinha italiana.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Cantina Lanza. Todos os direitos reservados. Feito com ❤️ para os amantes da culinária
              italiana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
