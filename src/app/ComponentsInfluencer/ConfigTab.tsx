"use client";

import { useState } from "react";
import {
  Save,
  Edit3,
  Image as ImageIcon,
  MapPin,
  Mail,
  Phone,
  DollarSign,
  Globe,
  Trash2,
  Music2,
} from "lucide-react";
import type React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

/* =============== COMPONENTE PRINCIPAL =============== */
export default function ConfigTab() {
  const [name, setName] = useState("Luísa Fernandes");
  const [bio, setBio] = useState("Criadora de conteúdo focada em moda urbana angolana.");
  const [email, setEmail] = useState("luisa@influencerao.ao");
  const [phone, setPhone] = useState("+244 923 456 789");
  const [city, setCity] = useState("Luanda");

  const [postPrice, setPostPrice] = useState("75000");
  const [storyPrice, setStoryPrice] = useState("35000");
  const [reelPrice, setReelPrice] = useState("120000");
  const [videoPrice, setVideoPrice] = useState("250000");

  const [instagram, setInstagram] = useState("luisafernandes");
  const [tiktok, setTiktok] = useState("luisaf.ao");
  const [youtube, setYoutube] = useState("LuisaFernandesOficial");

  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* HEADER */}
      <div className="flex items-end justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold">Configurações</h1>
          <p className="text-sm text-slate-500">
            Edita o teu perfil, preços e redes sociais.
          </p>
        </div>

        <button
          onClick={save}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold"
        >
          <Save className="h-4 w-4" />
          {saved ? "Guardado!" : "Guardar alterações"}
        </button>
      </div>

      {/* PERFIL */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Edit3 className="h-4 w-4 text-blue-600" /> Editar perfil
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-5">
          <div>
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white font-bold text-2xl mx-auto">
              LF
            </div>

            <button className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg border px-2 py-1.5 text-xs">
              <ImageIcon className="h-3.5 w-3.5" /> Trocar foto
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nome completo" value={name} onChange={setName} />
            <Input label="Cidade" value={city} onChange={setCity} icon={MapPin} />
            <Input label="Email" value={email} onChange={setEmail} icon={Mail} />
            <Input label="Telefone" value={phone} onChange={setPhone} icon={Phone} />

            <div className="md:col-span-2">
              <label className="text-sm font-medium">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
              <div className="text-[11px] text-slate-400 mt-1">
                {bio.length}/200
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREÇOS */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="font-semibold flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-blue-600" /> Tabela de preços
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
          <PriceInput label="Post Instagram" value={postPrice} onChange={setPostPrice} />
          <PriceInput label="Story" value={storyPrice} onChange={setStoryPrice} />
          <PriceInput label="Reel" value={reelPrice} onChange={setReelPrice} />
          <PriceInput label="Vídeo YouTube" value={videoPrice} onChange={setVideoPrice} />
        </div>
      </section>

      {/* REDES */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="font-semibold flex items-center gap-2">
          <Globe className="h-4 w-4 text-blue-600" /> Redes sociais
        </h3>

        <div className="space-y-3 mt-4">
          <SocialInput icon={FaInstagram} prefix="@" label="Instagram" value={instagram} onChange={setInstagram} verified />
          <SocialInput icon={Music2} prefix="@" label="TikTok" value={tiktok} onChange={setTiktok} />
          <SocialInput icon={FaYoutube} prefix="youtube.com/" label="YouTube" value={youtube} onChange={setYoutube} />
        </div>
      </section>

      {/* PERIGO */}
      <section className="rounded-xl border border-rose-200 bg-rose-50/40 p-5">
        <h3 className="font-semibold text-rose-700 flex items-center gap-2">
          <Trash2 className="h-4 w-4" /> Zona de perigo
        </h3>

        <button className="mt-3 rounded-lg border border-rose-300 px-3 py-2 text-sm text-rose-700">
          Eliminar conta
        </button>
      </section>
    </div>
  );
}

/* =============== INPUTS =============== */

interface InputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  icon?: React.ElementType;
}

function Input({ label, value, onChange, icon: Icon }: InputProps) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="relative mt-1">
        {Icon && <Icon className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-10 border rounded-lg text-sm ${Icon ? "pl-9" : "pl-3"}`}
        />
      </div>
    </div>
  );
}

interface PriceInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

function PriceInput({ label, value, onChange }: PriceInputProps) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
        className="w-full h-10 border rounded-lg text-sm pl-3 mt-1"
      />
    </div>
  );
}

interface SocialInputProps {
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (val: string) => void;
  prefix: string;
  verified?: boolean;
}

function SocialInput({ icon: Icon, label, value, onChange, prefix, verified }: SocialInputProps) {
  return (
    <div>
      <label className="text-sm font-medium flex items-center gap-2">
        <Icon className="h-4 w-4 text-blue-600" />
        {label}
        {verified && (
          <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 rounded">
            verificado
          </span>
        )}
      </label>

      <div className="relative mt-1">
        <span className="absolute left-3 top-2 text-slate-400 text-sm">
          {prefix}
        </span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-10 border rounded-lg text-sm pl-10"
        />
      </div>
    </div>
  );
}