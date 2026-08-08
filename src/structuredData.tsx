import { Helmet } from 'react-helmet-async'

export const homeSoftwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Escuteria',
  description:
    'Plataforma de escuta ativa baseada em inteligência artificial para instituições de ensino, criada para identificar sinais de sofrimento mental e riscos psicossociais em alunos e professores antes que se tornem crises.',
  url: 'https://escuteria.com.br/',
  applicationCategory: 'EducationalApplication',
}

export const contactFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A demo é realmente gratuita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, totalmente. Sem cartão de crédito, sem compromisso. Você conhece a plataforma, entende como funciona para a sua escola, e decide com calma.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva a implementação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em até 48 horas úteis após a assinatura do contrato sua escola já está com a plataforma ativa. Nossa equipe cuida de toda a configuração.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funciona com qualquer operadora de WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A Escuteria usa a API oficial do WhatsApp Business, compatível com qualquer número de telefone e operadora.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como é feito o treinamento da equipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos onboarding guiado para gestores, coordenadores e RH. O processo é simples — a maioria das equipes se adapta em uma única sessão.',
      },
    },
  ],
}

export function StructuredData({ data }: { data: object }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

export function structuredDataForPath(pathname: string) {
  if (pathname === '/') return homeSoftwareApplicationSchema
  if (pathname === '/contato') return contactFaqSchema
  return null
}
