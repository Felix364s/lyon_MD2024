import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from "lucide-react";

export function getWeatherIcon(code, size = 150) {
  const props = { size, strokeWidth: 1.5 };

  if (code === 0) return <Sun {...props} />;
  if (code === 1 || code === 2) return <CloudSun {...props} />;
  if (code === 3) return <Cloud {...props} />;
  if (code === 45 || code === 48) return <CloudFog {...props} />;
  if (code >= 51 && code <= 57) return <CloudDrizzle {...props} />;
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82))
    return <CloudRain {...props} />;
  if ((code >= 71 && code <= 77) || code === 85 || code === 86)
    return <CloudSnow {...props} />;
  if (code >= 95) return <CloudLightning {...props} />;

  return <Cloud {...props} />;
}

export function getWeatherDescription(code) {
  const map = {
    0: "Despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Neblina helada",
    51: "Llovizna ligera",
    53: "Llovizna moderada",
    55: "Llovizna intensa",
    61: "Lluvia ligera",
    63: "Lluvia moderada",
    65: "Lluvia fuerte",
    71: "Nieve ligera",
    73: "Nieve moderada",
    75: "Nieve fuerte",
    80: "Chubascos ligeros",
    81: "Chubascos moderados",
    82: "Chubascos fuertes",
    95: "Tormenta",
    96: "Tormenta con granizo",
    99: "Tormenta fuerte con granizo",
  };
  return map[code] ?? "—";
}