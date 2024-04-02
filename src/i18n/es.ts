import emojiPicker from "emoji-picker-element/i18n/es";
import { escape } from "./helpers";

export const es = {
  languageName: "Español",
  roarer: "Roarer",
  routeHome: "Página principal",
  routeInbox: "Bandeja de entrada",
  routeGroups: "Grupos",
  routeUsers: "Usuarios",
  routeSettings: "Ajustes",
  signOut: "Cerrar sesión",
  inDevelopmentMode: "Actualmente estás en modo de desarrollo.",
  loginHeader: "Inicia sesión en Roarer",
  loginUsername: "Nombre de usuario:",
  loginPassword: "Contraseña:",
  loginSubmit: "Iniciar sesión",
  loginSignUp: "Registrarse",
  loginFail:
    "No se pudo iniciar sesión. Esto puede ser porque tu token ha sido revocado. ¿Quieres intentarlo de nuevo?",
  loginSignoutConfirm: "¿Estás seguro de que quieres cerrar sesión?",
  loadMore: "Cargar más",
  loadingMore: "Cargando más...",
  onlineUsers: "Usuarios en línea ({n})",
  enterPostPlaceholder: "¡Di algo!",
  enterPostSend: "¡Enviar!",
  typingUsers: "Usuarios escribiendo:",
  online: "En línea",
  noTypingUsers: "Nadie está escribiendo.",
  discordBridgePost: "Este mensaje fue creado en el servidor de Discord.",
  webhookBridgePost:
    "Este mensaje fue creado a través de un Webhook. Estos no pasan por el sistema de cuentas de Meower, cualquiera puede crear un mensaje bajo cualquier nombre.",
  splashBridgePost: "Este mensaje fue creado a través de Splash.",
  revoltBridgePost: "Este mensaje fue creado en el servidor de Revolt.",
  deletePost: "Eliminar",
  editPost: "Editar",
  replyPost: "Responder",
  reportPost: "Reportar",
  cancelEditingPost: "Cancelar",
  reloadPostButton: "Recargar",
  deletePostConfirm: "¿Estás seguro de que quieres eliminar este mensaje?",
  reportReason: "Motivo:",
  confirmReport:
    "¿Estás absolutamente seguro? Estás reportando por la siguiente razón:\n{reason}\n\nMensaje:\n{post}",
  reportSuccess: "Reportado.",
  chatDM: "MD",
  chatSettings: "Ajustes",
  chatPeople: "Personas",
  renameChatFail: "No se pudo cambiar el nombre del chat: {status}",
  addMemberChatFail: "No se pudo añadir miembro: {status}",
  removeMemberChatFail: "No se pudo eliminar miembro: {status}",
  leaveChatFail: "No se pudo abandonar el chat: {status}",
  promoteChatFail: "No se pudo promover al usuario: {status}",
  back: "Atrás",
  chatRename: "Renombrar",
  chatAddMember: "Añadir",
  chatOwner: "Propietario",
  chatPromote: "Promocionar",
  chatRemove: "Eliminar",
  profileInformationFail:
    "No se pudo obtener la información del perfil: {status}",
  configFail: "No se pudo actualizar tu perfil: {errmsg}",
  configSuccess: "Perfil actualizado.",
  newPassword: "¿Cuál quieres que sea tu nueva contraseña?",
  oldPassword: "¿Cuál es tu contraseña actual?",
  passwordChangeFail: "No se pudo cambiar tu contraseña: {errmsg}",
  alsoRevokeTokens: "¿Quieres también revocar todos los tokens?",
  revokeTokensConfirm:
    "¿Estás seguro? Tendrás que iniciar sesión en todos los dispositivos nuevamente.",
  revokeTokensFail: "No se pudieron revocar los tokens: {errmsg}",
  deleteAccountConfirm:
    "¿Estás seguro? NO HAY FORMA ALGUNA de deshacer esto. Tu cuenta será ELIMINADA PERMANENTEMENTE después de 7 días.",
  deleteAccountPasswordPrompt:
    "Por favor, introduce tu contraseña para confirmar la eliminación de tu cuenta.",
  deleteAccountFail: "No se pudo eliminar la cuenta: {err}",
  usersSectionMe: "Yo",
  usersMeQuote: "Cita:",
  usersMePfp: "Foto de perfil:",
  profilePictureAlt: "Foto de perfil #{n}",
  updateProfile: "Actualizar perfil",
  changePassword: "Cambiar contraseña",
  revokeTokens: "Revocar todos los tokens",
  revokeTokensInfo: "Esto te desconectará de todos los dispositivos.",
  deleteAccount: "Eliminar cuenta",
  deleteAccountInfo:
    "Esto eliminará tu cuenta PERMANENTEMENTE. No hay forma de deshacer esto.",
  language: "Idioma",
  credits: "Créditos",
  contributorsThanks: {
    start: "Gracias a todos los ",
    contributorsLink: "contribuyentes",
    end: " que hicieron esto posible.",
  },
  mascotThanks: {
    start: "Un agradecimiento especial a ",
    end: " por crear la mascota (actualmente sin nombre)!",
  },
  blockUserConfirm:
    "¿Estás seguro de que quieres bloquear a este usuario? No podrás ver sus mensajes.",
  unblockUserConfirm:
    "¿Estás seguro de que quieres desbloquear a este usuario?",
  blockFailed: "No se pudo bloquear: {status}",
  unblockFailed: "No se pudo desbloquear: {status}",
  username: "Nombre de usuario",
  userSearch: "Buscar",
  noUserPlaceholder: "¡Introduce un usuario arriba para ver su perfil!",
  lastSeenUser: "Visto por última vez el {date}",
  banned: "Baneado",
  accountCreated: "Cuenta creada en: {date}",
  block: "Bloquear",
  unblock: "Desbloquear",
  createChat: "Crear",
  chatNickname: "Apodo",
  openDMFail: "No se pudo abrir el MD: {status}",
  chatCreateFail: "No se pudo crear el chat: {status}",
  chatGetFail: "No se pudieron obtener los chats: {status}",
  disconnected:
    "Te has desconectado. Al hacer clic en Aceptar, se volverá a cargar la página.",
  myAccount: "Mi cuenta",
  languageContributing: {
    start:
      "¿Hablas alguno de estos idiomas, o incluso uno que aún no está presente aquí? Si quieres ver Roarer en tu idioma, puedes ",
    githubLink: "traducirlo en GitHub",
    end: "!",
  },
  editPostFail: "No se pudo editar el mensaje: {status}",
  loadMoreFail: "No se pudieron cargar más mensajes: {status}",
  getPostsFail: "No se pudieron obtener los mensajes: {status}",
  getChatFail: "No se pudo obtener el chat: {status}",
  message404:
    "Esta página no se pudo encontrar. ¡Haz clic en uno de los enlaces de arriba para ir a una página que sí exista!",
  permSysadmin: "Puede hacer cualquier cosa",
  permViewReports: "Puede ver informes",
  permEditReports: "Puede editar informes",
  permViewNotes: "Puede ver notas de usuario/mensaje",
  permEditNotes: "Puede crear y editar notas de usuario/mensaje",
  permViewPosts: "Puede ver información adicional sobre los mensajes",
  permDeletePosts: "Puede eliminar cualquier mensaje",
  permViewAlts: "Puede ver cuentas alternativas de usuarios",
  permSendAlerts: "Puede enviar alertas",
  permKickUsers: "Puede expulsar usuarios de Meower",
  permClearUserQuotes: "Puede borrar las citas de cualquier usuario",
  permViewBanStates: "Puede ver el estado de bloqueo de cualquier usuario",
  permEditBanStates: "Puede bloquear o desbloquear cualquier usuario",
  permDeleteUsers: "Puede eliminar cualquier usuario",
  permViewIPs: "Puede ver la dirección IP de cualquier usuario",
  permBlockIPs: "Puede bloquear ciertas direcciones IP de usar Meower",
  permViewChats: "Puede ver cualquier chat",
  permEditChats: "Puede configurar cualquier chat",
  permSendAnnouncements: "Puede enviar anuncios",
  settingAnyImageHost:
    "Permitir cualquier host de imágenes, incluso fuera de la lista blanca estándar.",
  settingAnyImageHostWarn:
    "ADVERTENCIA: Esto permitirá que cualquier sitio web se use como host de imágenes, y se hará automáticamente una solicitud a él. Esto podría hacer que tu dirección IP se muestre en el sitio web. Utiliza esto de manera responsable.",
  settingFilterSwears:
    "Filtrar palabras malsonantes de las publicaciones y reemplazarlas con '****'.",
  settingEnterSends:
    "Enviar publicación al presionar Enter. Todavía puedes crear nuevas líneas presionando Mayús+Enter.",
  postFail: "No se pudo enviar la publicación: {status}",
  deletePostFail: "No se pudo eliminar la publicación: {status}",
  notoColorEmoji:
    "Los emojis utilizan la fuente Noto Color Emoji, con licencia bajo la Licencia de fuente abierta.",
  chooseEmoji: "Elegi un emoji",
  themeSettings: "Personalizar tema",
  themeInvalidJSON: "JSON no válido",
  themeAccent: "Color de acento",
  themeBackground: "Color de fondo",
  themeForeground: "Color de primer plano",
  themeAccentForeground: "Color de primer plano de acento",
  themeLink: "Color de enlace",
  themePostStyle: "Estilo de mensaje",
  themePostStyleBordered: "Con bordes",
  themePostStyleFilled: "Relleno",
  themeCurrent: "Tema actual",
  themeReset: "Restablecer tema",
  theme_light: "Claro",
  theme_dark: "Oscuro",
  theme_stone: "Piedra",
  theme_meower: "Meower",
  statsFail: "Error al obtener estadísticas: {status}",
  statsLoading: "Cargando estadísticas...",
  statsMessage:
    "Hay {posts} mensajes, publicados en home y {chats} otros chats. ¡{users} usuarios contribuyeron a ese número!",
  statsDontSpam: "No hagas spam solo para aumentar estos números.",
  newDMToast: "Nuevo MD de {username}",
  newChatMessageToast: "Nuevo mensaje en {chat} de {username}",
  chatActionAlt: "Ve a este chat para ver el mensaje.",
  emojiPicker: escape(JSON.stringify(emojiPicker)),
  settingHideBlockedMentions:
    "Ocultar cualquier mensaje que mencione a alguien que hayas bloqueado.",
  blockedUsers:
    "Actualmente has bloqueado a los siguientes usuarios. Haz clic en cualquiera de ellos para abrir su perfil. También puedes desbloquearlos desde allí.",
  reportHistory: "Historial de reportes",
  reportsLoading: "Cargando reportes...",
  reportsFail: "No se pudieron cargar los reportes: {status}",
  reportHistoryPost: "Mensaje",
  reportHistoryReason: "Motivo",
  reportHistoryStatus: "Estado",
  reportHistoryDate: "Hora",
  reportHistoryDeletedPost: "Mensaje eliminado por {name}",
  reportHistoryKnownPost: "Mensaje de {name}",
  reportHistoryUnknownPost: "Mensaje desconocido",
  reportHistory_pending: "Pendiente",
  reportHistory_action_taken: "Acción tomada",
  reportHistory_no_action_taken: "No se tomó ninguna acción",
  reportUser: "Reportar usuario",
  confirmUserReport:
    "¿Estás absolutamente seguro? Estás reportando por la siguiente razón:\n{reason}\n\nUsuario:\n{username}",
  reportHistoryUser: "Usuario {username}",
  april1st2024Cl3Message:
    "> **Añadido por Roarer:**\n>Roarer se ha actualizado para no usar ninguno de estos comandos. Tu experiencia en Roarer no cambiará. ¡Gracias por usar Roarer!\n\n",
  getPostFail: "Error al obtener el mensaje: {status}",
  loadingPost: "Cargando mensaje...",
  backToHome: "Volver a inicio",
  logIn: "Iniciar sesión",
  loginRequiredHeader:
    "Inicia sesión para usar las funciones sociales de Roarer",
  loginRequiredExplanation:
    "Puedes navegar por Meower y usar Roarer sin iniciar sesión, pero para usar la mayoría de las funciones sociales, tendrás que iniciar sesión.",
  loginRequiredCta:
    "Si deseas crear una cuenta, puedes hacerlo a continuación. Esto creará una cuenta en Meower. Si ya tienes una cuenta en Meower, no necesitas hacerlo, simplemente inicia sesión con tu cuenta existente.",
  loginRequiredBack: {
    start: "Si no, puedes ",
    link: "volver a inicio",
    end: ". Siempre podrás iniciar sesión a través del enlace en la parte superior de la página.",
  },
  themeColorScheme: "Esquema de color",
  themeColorSchemeDark: "Oscuro",
  themeColorSchemeLight: "Claro",
  emojiPickerTabEmoji: "Emoji",
  emojiPickerTabStickers: "Stickers",
  settingUseScratch2Blocks:
    "Usar el estilo Scratch 2.0 para los bloques de Scratch cuando la versión no esté especificada.",
  download: "Descargar {fileName} ({contentType})",
  linkPost: "Enlace al mensaje",
  okButton: "Aceptar",
  cancelButton: "Cancelar",
  yesButton: "Sí",
  noButton: "No",
  dialogTitle_alert: "Alerta",
  dialogTitle_prompt: "Solicitud",
  dialogTitle_confirm: "Confirmar",
  reportReasonPlaceholder: "Motivo del reporte",
  newPasswordPlaceholder: "Nueva contraseña",
  oldPasswordPlaceholder: "Contraseña actual",
  deleteAccountPasswordPlaceholder: "Contraseña",
  routeRelated: "Más",
  livechat: "Chat en vivo",
  livechatJoin: "{'@'}{username} se unió al chat.",
  livechatLeave: "{'@'}{username} abandonó el chat.",
  liveChatDescription:
    "Los mensajes aquí no se guardan. Ten en cuenta que esto no impide que terceros (por ejemplo, el puente de Discord) registren los mensajes.",
  uploadProfilePicture: "Subir foto de perfil",
  uploadTokenFail: "Error al obtener el token para subir: {status}",
  uploadTooLarge:
    "Tu archivo es demasiado grande. Por favor, mantenlo en o por debajo de {size}.",
  uploadedPfp: "Foto de perfil subida",
  profilePictureCustomAlt: "Foto de perfil personalizada",
  settingShowPfps: "Mostrar fotos de perfil en los mensajes.",
  adminPost:
    "Este mensaje fue publicado por un moderador. Ve a su página de usuario para obtener más información.",
  linkGithub: "GitHub",
  themeLoadFail: "Error al cargar el tema.",
  closePost: "Cerrar",
  usersMePfpColor: "Color de fondo de la foto de perfil personalizada:",
  usersMePfpColorNo: "Ninguno",
  externalSite:
    "¿Estás seguro de que quieres salir de Roarer y abrir {link}? Se abrirá en una nueva pestaña.",
  orSignUp: "...o registrarse.",
  orLogIn: "...o iniciar sesión.",
  loginConfirmPassword: "Confirmar contraseña",
  tosCheck: {
    start: "He leído y acepto los ",
    link: "Términos de servicio y Política de privacidad de Meower",
    end: ".",
  },
  cantSignUp_passwordMismatch: "¡Las contraseñas no coinciden!",
  cantSignUp_noPassword: "¡Por favor, introduce una contraseña!",
  cantSignUp_noUsername: "¡Por favor, introduce un nombre de usuario!",
  cantSignUp_noTos:
    "¡Por favor, lee y acepta los Términos de Servicio y la Política de Privacidad!",
  theme_meo: "Meo",
  themePresets: "Presets",
  syntaxInfo: "Información de sintaxis",
  routeSyntax: "Sintaxis de mensajes",
  syntax: "Sintaxis",
  syntaxMarkdown: {
    start:
      "Puedes usar Markdown normal para crear mensajes aquí. La mayoría de las funciones que no forman parte de las extensiones son compatibles. Meower hace el cambio de que las nuevas líneas crean nuevas líneas reales en lugar de continuar el párrafo. Si quieres aprender sobre Markdown, ",
    link: "mira esta hoja de trucos",
    end: ".",
  },
  syntaxExtensions:
    "Sin embargo, tanto Meower como Roarer añaden algunas características a la sintaxis. Todo el Markdown específico de Roarer seguirá viéndose bien en otros clientes, así que no te preocupes por usarlo.",
  syntaxAttachments: "Archivos adjuntos",
  syntaxAttachmentsDescription:
    'Puedes escribir "[Nombre de la imagen: Enlace de la imagen]" para agregar archivos adjuntos a tus publicaciones. No importa dónde los coloques, automáticamente se colocarán al final de una publicación. Esta es una característica de Meower que Roarer adoptó. Aún puedes usar imágenes de Markdown normales usando la sintaxis "![Nombre de la imagen](Enlace de imagen)" si lo prefieres. Las imágenes deben alojarse en un servidor de imágenes incluido en la lista blanca.',
  syntaxImageHosts: "Servidor de imágenes",
  syntaxSyntaxHighlighting: "Resaltado de sintaxis",
  syntaxSyntaxHighlightingDescription:
    'Roarer admite resaltado de sintaxis para bloques de código, mientras que Meower Svelte y la mayoría de los demás clientes no lo hacen. Para los usuarios de esos clientes, el bloque de código simplemente aparecerá sin resaltar. Roarer también admite agregar resaltado de sintaxis al código en línea. Para utilizar esto, puede escribir "código (nombre de idioma)". Los usuarios que no estén en Roarer verán el nombre del idioma entre paréntesis.',
  syntaxScratchBlocks: "Bloques de Scratch",
  syntaxScratchBlocksDescription: {
    start:
      'Puedes utilizar el lenguaje especial "scratch" en bloques de código para representar bloques de Scratch usando la sintaxis de ',
    link: "scratchblocks",
    end: '. Puedes especificar la versión de Scratch que deseas utilizar especificando "scratch2" o "scratch3"; de lo contrario, se utilizará la preferencia del usuario. Las personas que no utilicen Roarer verán la sintaxis de scratchblocks, y no los bloques en sí.',
  },
  settingConfirmExternalLinks: "Confirmar antes de abrir links externos.",
  hi: "Oye, ¡hola! :)",
  settingJoker: "Soy un/una bromista",
  devDisconnect: "Desconectar",
  disconnectedDialog:
    "Has sido desconectado de Meower. Intentando reconectar...",
};
