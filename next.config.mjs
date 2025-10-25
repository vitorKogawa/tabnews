// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "export",
    // Opcional: Se seu projeto será hospedado em uma subpasta (ex: seu-usuario.github.io/seu-projeto)
    // Certifique-se de substituir 'seu-repositorio' pelo nome do seu repositório.
    basePath: process.env.NODE_ENV === "production" ? "/tabnews" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/tabnews/" : "",
    // Opcional: Desabilitar otimizações de imagem padrão se você tiver problemas
    images: {
      unoptimized: true,
    },
  };
  return nextConfig;
};
