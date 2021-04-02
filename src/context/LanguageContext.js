import React from "react";

export const LanguageContext = React.createContext({
  language: 'PT',
  availableLanguages: ['PT', 'EN'],
  setLanguage: () => {},
});