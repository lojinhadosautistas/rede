/**
 * Sistema REDE — Controle de Papéis (Roles)
 * Versão: 1.0 
 * Modo: Frontend seguro (sem banco de dados)
 *
 * Este arquivo define:
 * - Papéis institucionais do Sistema REDE
 * - Permissões associadas
 * - Mapeamento inicial por e-mail (temporário)
 */

/**
 * PAPÉIS OFICIAIS DO SISTEMA REDE
 */
export const ROLES = {
  ADMIN: "admin",
  GESTOR: "gestor",
  CURADOR: "curador",
  PESQUISADOR: "pesquisador",
  COLABORADOR: "colaborador",
  VISUALIZADOR: "visualizador"
};

/**
 * DESCRIÇÃO INSTITUCIONAL DOS PAPÉIS
 */
export const ROLE_DESCRIPTIONS = {
  admin: "Administração geral do Sistema REDE. Acesso total.",
  gestor: "Gestão estratégica de projetos, calendários e relatórios.",
  curador: "Curadoria de conteúdo audiovisual, artístico e cultural.",
  pesquisador: "Produção e análise de relatórios técnicos e dossiês.",
  colaborador: "Acesso colaborativo a materiais operacionais.",
  visualizador: "Acesso restrito a conteúdos públicos internos."
};

/**
 * PERMISSÕES POR PAPEL
 */
export const ROLE_PERMISSIONS = {
  admin: [
    "hub",
    "rota-azul",
    "calendario-2026",
    "relatorios",
    "admin-panel"
  ],

  gestor: [
    "hub",
    "calendario-2026",
    "relatorios"
  ],

  curador: [
    "hub",
    "rota-azul"
  ],

  pesquisador: [
    "hub",
    "relatorios"
  ],

  colaborador: [
    "hub",
    "rota-azul"
  ],

  visualizador: [
    "hub"
  ]
};

/**
 * MAPA TEMPORÁRIO DE USUÁRIOS (POR E-MAIL)
 * ⚠️ Pode ser removido quando houver Firestore
 */
export const USER_ROLE_MAP = {
  "paula@rede.org": ROLES.ADMIN,
  "gestor@rede.org": ROLES.GESTOR,
  "curador@rede.org": ROLES.CURADOR,
  "pesquisador@rede.org": ROLES.PESQUISADOR
};

/**
 * RETORNA PAPEL DO USUÁRIO ATUAL
 */
export function getUserRole(user) {
  if (!user || !user.email) return ROLES.VISUALIZADOR;
  return USER_ROLE_MAP[user.email] || ROLES.VISUALIZADOR;
}

/**
 * VERIFICA SE O PAPEL TEM ACESSO A UMA ÁREA
 */
export function hasAccess(role, area) {
  return ROLE_PERMISSIONS[role]?.includes(area);
}
