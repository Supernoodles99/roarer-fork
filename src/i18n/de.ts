import emojiPicker from "emoji-picker-element/i18n/de";
import { escape } from "./helpers";

export const de = {
  languageName: "Deutsch",
  roarer: "Roarer",
  routeHome: "Startseite",
  routeInbox: "Nachrichten",
  routeGroups: "Gruppen",
  routeUsers: "Nutzer",
  routeSettings: "Einstellungen",
  signOut: "Abmelden",
  inDevelopmentMode: "Du bist momentan im Entwicklungsmodus.",
  loginHeader: "Bei Roarer anmelden",
  loginUsername: "Nutzername:",
  loginPassword: "Passwort:",
  loginSubmit: "Anmelden",
  loginSignUp: "Konto erstellen",
  loginFail:
    "Du konntest nicht angemeldet werden. Das könnte daran liegen, dass dein Token zurückgenommen wurde. Willst du es nochmal versuchen?",
  loginSignoutConfirm: "Bist du dir sicher, dass du dich abmelden willst?",
  loadMore: "Mehr laden",
  loadingMore: "Mehr wird geladen...",
  onlineUsers: "Verbundene Nutzer ({n})",
  enterPostPlaceholder: "Sage etwas!",
  enterPostSend: "Senden!",
  typingUsers: "Tippende Nutzer:",
  online: "Online",
  noTypingUsers: "Niemand tippt gerade.",
  discordBridgePost: "Dieser Post wurde auf dem Discordserver erstellt.",
  webhookBridgePost:
    "Dieser Post wurde durch ein Webhook erstellt. Diese gehen nicht durch Meowers Kontosystem, jeder kann unter jedem Namen eine Nachricht schreiben.",
  splashBridgePost: "Dieser Post wurde mit Splash erstellt.",
  revoltBridgePost: "Dieser Post wurde auf dem Revoltserver erstellt.",
  deletePost: "Löschen",
  editPost: "Bearbeiten",
  replyPost: "Antworten",
  reportPost: "Melden",
  cancelEditingPost: "Abbrechen",
  reloadPostButton: "Neu laden",
  deletePostConfirm: "Bist du dir sicher, dass du diesen Post löschen willst?",
  reportReason: "Grund:",
  confirmReport:
    "Bist du dir absolut sicher? Du meldest aus dem folgendem Grund:\n{reason}\n\nDiesen Post:\n{post}",
  reportSuccess: "Gemeldet.",
  chatDM: "Direktnachricht",
  chatSettings: "Einstellungen",
  chatPeople: "Mitglieder",
  renameChatFail: "Chat konnte nicht umbenannt werden: {status}",
  addMemberChatFail: "Mitglied konnte nicht hinzugefügt werden: {status}",
  removeMemberChatFail: "Mitglied konnte nicht entfernt werden: {status}",
  leaveChatFail: "Chat konnte nicht verlassen werden: {status}",
  promoteChatFail: "Nutzer konnte nicht befördert werden: {status}",
  back: "Zurück",
  chatRename: "Umbenennen",
  chatAddMember: "Hinzufügen",
  chatOwner: "Besitzer",
  chatPromote: "Befördern",
  chatRemove: "Entfernen",
  profileInformationFail:
    "Profilinformationen konnten nicht erhalten werden: {status}",
  configFail: "Profil konnte nicht aktualisiert werden: {errmsg}",
  configSuccess: "Profil wurde aktualisiert.",
  newPassword: "Was soll dein neues Passwort sein?",
  oldPassword: "Was ist dein momentanes Passowrt?",
  passwordChangeFail: "Dein Passwort konnte nicht geändert werden: {errmsg}",
  alsoRevokeTokens: "Möchtest du auch alle Tokens zurücknehmen?",
  revokeTokensConfirm:
    "Bist du dir sicher? Du musst dich auf jedem Gerät erneut anmelden.",
  revokeTokensFail: "Tokens konnten nicht zurückgenommen werden: {errmsg}",
  deleteAccountConfirm:
    "Bist du dir sicher? Diese Aktion kann AUF KEINE ART rückgängig gemacht werden. Dein Konto wird FÜR IMMER nach 7 Tagen gelöscht werden.",
  deleteAccountPasswordPrompt:
    "Gebe bitte dein Passwort ein, um dein Konto zu löschen.",
  deleteAccountFail: "Konto konnte nicht gelöscht werden: {err}",
  usersSectionMe: "Ich",
  usersMeQuote: "Zitat:",
  usersMePfp: "Profilbild:",
  profilePictureAlt: "Profilbild #{n}",
  updateProfile: "Profil aktualisieren",
  changePassword: "Passwort ändern",
  revokeTokens: "Alle Tokens zurücknehmen",
  revokeTokensInfo: "Dies wird dich von allen Geräten abmelden.",
  deleteAccount: "Konto löschen",
  deleteAccountInfo:
    "Dies wird dein Konto FÜR IMMER löschen. Es gibt KEINE Möglichkeit, das hinterher rückgänging zu machen.",
  language: "Sprache",
  credits: "Dankaussagungen",
  contributorsThanks: {
    start: "Danke an alle ",
    contributorsLink: "Mitwirkenden",
    end: ", die dieses Projekt ermöglicht haben.",
  },
  mascotThanks: {
    start: "Besonderer Dank geht an ",
    end: ", der das (noch unbenannte) Maskottchen erstellt hat!",
  },
  blockUserConfirm:
    "Bist du dir sicher, dass du diesen Nutzer blockieren willst? Du wirst keine seiner Posts mehr sehen können.",
  unblockUserConfirm:
    "Bist du dir sicher, dass du diesen Nutzer nicht mehr blockieren willst?",
  blockFailed: "Nutzer konnte nicht blockiert werden: {status}",
  unblockFailed: "Nutzer konnte nicht entblockiert werden: {status}",
  username: "Benutzername",
  userSearch: "Los",
  noUserPlaceholder: "Gebe oben einen Nutzer ein, um sein Profil zu sehen!",
  lastSeenUser: "Zuletzt gesehen am {date}",
  banned: "Gebannt",
  accountCreated: "Konto erstellt: {date}",
  block: "Blockieren",
  unblock: "Nicht mehr blockieren",
  createChat: "Erstellen",
  chatNickname: "Name",
  openDMFail: "Direktnachricht konnte nicht geöffnet werden: {status}",
  chatCreateFail: "Chat konnte nicht erstellt werden {status}",
  chatGetFail: "Chats konnten nicht erhalten werden: {status}",
  disconnected:
    "Deine Verbindung wurde abgebrochen. Drücke OK, um die Seite neu zu laden.",
  myAccount: "Mein Konto",
  languageContributing: {
    start:
      "Sprichst du eine dieser Sprachen, oder sogar eine, die hier noch nicht verfügbar ist? Wenn du Roarer in deiner Sprache sehen willst, kannst du es ",
    githubLink: "auf GitHub übersetzen",
    end: "!",
  },
  editPostFail: "Post konnte nicht bearbeitet werden: {status}",
  loadMoreFail: "Mehr Posts konnten nicht geladen werden: {status}",
  getPostsFail: "Posts konnten nicht erhalten werden: {status}",
  message404:
    "Diese Seite konnte nicht gefunden werden. Klicke auf einer der obigen Links, um auf eine Seite zukommen, die doch existiert!",
  permSysadmin: "Kann alles machen",
  permViewReports: "Kann Meldungen einsehen",
  permEditReports: "Kann Meldungen bearbeiten",
  permViewNotes: "Kann Nutzer-/Postnotizen einsehen",
  permEditNotes: "Kann Nutzer-/Postnotizen bearbeiten",
  permViewPosts: "Kann zusätzliche Informationen bei Posts einsehen",
  permDeletePosts: "Kann jeden Post löschen",
  permViewAlts: "Kann alternative Konten von Nutzern einsehen",
  permSendAlerts: "Kann Meldungen senden",
  permKickUsers: "Kann Nutzer von Meower kicken",
  permClearUserQuotes: "Kann die Zitate jedes Nutzers löschen",
  permViewBanStates: "Kann den Banstatus jedes Nutzers einsehen",
  permEditBanStates: "Kann jeden Nutzer bannen oder entbannen",
  permDeleteUsers: "Kann jeden Nutzer löschen",
  permViewIPs: "Kann die IP-Adresse jedes Nutzers einsehen",
  permBlockIPs: "Kann bestimmte IP-Adressen davon abhalten, Meower zu besuchen",
  permViewChats: "Kann jeden Chat einsehen",
  permEditChats: "Kann jeden Chat konfigurieren",
  permSendAnnouncements: "Kann Ankündigungen senden",
  settingAnyImageHost:
    "Erlaube jeden Bildhost, auch außerhalb der normal gültigen Liste.",
  settingAnyImageHostWarn:
    "WARNUNG: Dies wird jeder Website erlauben, ein Bildhost zu sein, und eine Nachricht wird automatisch zu ihr gesendet. Dies könnte dazu führen, dass dieser Website deine IP-Adresse gezeigt wird. Nutze dies verantwortungsbewusst.",
  settingFilterSwears: 'Ersetze Schimpfwörtern in Posts mit "****".',
  emojiPicker: escape(JSON.stringify(emojiPicker)),
  settingEnterSends:
    "Sende Posts, wenn du Enter drückst. Du kannst immer noch neue Zeilen schreiben, indem du Umschalt+Enter drückst.",
  postFail: "Post konnte nicht gesendet werden: {status}",
  deletePostFail: "Post konnte nicht gelöscht werden: {status}",
  notoColorEmoji:
    'Emojis benutzen Schriftart "Noto Color Emoji", die unter der Open Font License lizensiert ist.',
  chooseEmoji: "Wähle einen Emoji",
  themeSettings: "Stil ändern",
  themeInvalidJSON: "Inkorrektes JSON",
  themeAccent: "Hauptfarbe",
  themeBackground: "Hintergrundfarbe",
  themeForeground: "Vordergrundfarbe",
  themeAccentForeground: "Vordergrundfarbe auf der Hauptfarbe",
  themeLink: "Linkfarbe",
  themePostStyle: "Poststil",
  themePostStyleBordered: "Mit Rand",
  themePostStyleFilled: "Gefüllt",
  themeCurrent: "Stil:",
  themeReset: "Stil zurücksetzen",
  theme_light: "Hell",
  theme_dark: "Dunkel",
  theme_stone: "Stein",
  theme_meower: "Meower",
  statsFail: "Statistiken konnten nicht geladen werden: {status}",
  statsLoading: "Statistiken werden geladen...",
  statsMessage:
    "Es gibt {posts} Posts, die auf der Startseite und in {chats} anderen Chats gesendet wurden. {users} Nutzer haben zu dieser Zahl beigetragen!",
  statsDontSpam: "Spamme nicht, nur damit sich diese Zahlen erhöhen.",
  newDMToast: "Nachricht von {username}",
  newChatMessageToast: "Nachricht in {chat} von {username}",
  chatActionAlt: "Gehe zu diesem Chat, um die Nachricht zu sehen.",
  settingHideBlockedMentions:
    "Verstecke jede Nachricht, die jemanden mit {'@'} anspricht, den du blockiert hast.",
  blockedUsers:
    "Du hast folgende Nutzer blockiert. Klicke auf einen, um sein Profil zu öffnen. Du kannst sie auch von da aus entblockieren.",
  reportHistory: "Meldungen",
  reportsLoading: "Meldungen werden geladen...",
  reportsFail: "Meldungen konnten nicht geladen werden: {status}",
  reportHistoryPost: "Post",
  reportHistoryReason: "Grund",
  reportHistoryStatus: "Status",
  reportHistoryDate: "Zeit",
  reportHistoryDeletedPost: "Gelöschter Post von {name}",
  reportHistoryKnownPost: "Post von {name}",
  reportHistoryUnknownPost: "Unbekannter Post",
  reportHistory_pending: "Ausstehend",
  reportHistory_action_taken: "Aktion vorgenommen",
  reportHistory_no_action_taken: "Aktion nicht vorgenommen",
  reportUser: "Melden",
  confirmUserReport:
    "Bist du dir absolut sicher? Du meldest aus dem folgendem Grund:\n{reason}\n\nNutzer:\n{username}",
  reportHistoryUser: "Nutzer {username}",
  april1st2024Cl3Message:
    "> **Von Roarer hinzugefügt:**\n>Roarer wurde aktualisiert, sodass keine von diesen Kommandos genutzt werden. Deine Erfahrung auf Roarer wird sich nicht verändern. Danke, dass du Roarer benutzt!\n\n",
  getPostFail: "Post konnte nicht erhalten werden: {status}",
  loadingPost: "Post wird geladen...",
  backToHome: "Zurück zur Startseite",
  logIn: "Anmelden",
  loginRequiredHeader: "Melde dich an, um soziale Funktionen Roarers zu nutzen",
  loginRequiredExplanation:
    "Du kannst dich auf Meower umschauen und Roarer nutzen, ohne dich anzumelden, aber um die meisten sozialen Funktionen zu nutzen, musst du dich anmelden.",
  loginRequiredCta:
    "Wenn du ein Konto erstellen willst, kannst du das unten tun. Dies wird auf Meower ein Konto erstellen. Wenn du auf Meower bereits ein Konto hast, musst du das nicht tun - melde dich einfach it deinem bereits existierendem Konto an.",
  loginRequiredBack: {
    start: "Wenn nicht, kannst du ",
    link: "zurück zur Startseite gehen",
    end: ". Du kannst dich immer durch den Link oben auf der Seite anmelden.",
  },
  themeColorScheme: "Farbschema",
  themeColorSchemeDark: "Dunkel",
  themeColorSchemeLight: "Hell",
  emojiPickerTabEmoji: "Emoji",
  emojiPickerTabStickers: "Sticker",
  settingUseScratch2Blocks:
    "Nutze die Scratch 2.0-Version von Blöcken, wenn die Version nicht angegeben ist.",
  download: "{fileName} herunterladen ({contentType})",
  linkPost: "Postlink",
  okButton: "Ok",
  cancelButton: "Abbrechen",
  yesButton: "Ja",
  noButton: "Nein",
  dialogTitle_alert: "Dialog",
  dialogTitle_prompt: "Frage",
  dialogTitle_confirm: "Sicherstellen",
  reportReasonPlaceholder: "Meldegrund",
  newPasswordPlaceholder: "Neues Passwort",
  oldPasswordPlaceholder: "Altes Passwort",
  deleteAccountPasswordPlaceholder: "Passwort",
  routeRelated: "Mehr",
  livechat: "Livechat",
  livechatJoin: "{'@'}{username} ist zum Chat beigetreten.",
  livechatLeave: "{'@'}{username} hat den Chat verlassen.",
  liveChatDescription:
    "Hier werden Nachrichten nicht gespeichert. Dritte (z.B. der Discord-Bot) können die Nachrichten hier aber trotzdem speichern.",
  uploadProfilePicture: "Profilbild hochladen",
  uploadTokenFail: "Token zum Hochladen konnte nicht erhalten werden: {status}",
  uploadTooLarge: "Das ist zu groß. Bitte bleibe bei oder unter {size}.",
  uploadedPfp: "Hochgeladenes Profilbild",
  profilePictureCustomAlt: "Eigenes Profilbild",
  settingShowPfps: "Zeige Profilbilder in Posts.",
  adminPost:
    "Dies wurde von einem Moderator geschrieben. Gehe zu seinem Profil für mehr Informationen.",
  linkGithub: "GitHub",
  themeLoadFail: "Stil konnte nicht geladen werden.",
  closePost: "Schließen",
  usersMePfpColor: "Hintergrundfarbe vom eigenen Profilbild:",
  usersMePfpColorNo: "Keine",
  externalSite:
    "Bist du dir sicher, dass du Roarer verlassen und {link} öffnen willst? Der Link wird in einem neuen Tab geöffnet.",
  orSignUp: "...oder erstelle ein Konto.",
  orLogIn: "...oder melde dich an.",
  loginConfirmPassword: "Passwort bestätigen",
  tosCheck: {
    start: "Ich habe ",
    link: "Meowers Nutzungsbedingungen und Datenschutzerklärung",
    end: " gelesen und stimme zu.",
  },
  cantSignUp_passwordMismatch: "Die Passwörter passen nicht!",
  cantSignUp_noPassword: "Bitte gebe ein Passwort an!",
  cantSignUp_noUsername: "Bitte gebe einen Benutzernamen an!",
  cantSignUp_noTos:
    "Bitte stimme den Nutzungsbedingungen und der Datenschutzerklärung zu!",
  theme_meo: "Meo",
};
