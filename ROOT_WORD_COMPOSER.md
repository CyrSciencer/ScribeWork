# 🎯 Root Word Composer - Mode d'emploi

Le **Root Word Composer** est une interface interactive qui permet de créer facilement de nouveaux root words en utilisant les sons de `soundsOfLingua.ts`.

## 🚀 Comment utiliser

### 1. Interface Web

1. Lancez l'application : `npm start`
2. Ouvrez votre navigateur sur `http://localhost:3000`
3. Utilisez le clavier phonétique pour composer votre mot
4. Remplissez les champs **Classe** et **Signification**
5. Cliquez sur **💾 Enregistrer Root Word**

### 2. Processus de sauvegarde

Après avoir cliqué sur "Enregistrer", vous recevrez :

- 📋 Une commande automatiquement copiée dans le presse-papier
- 📝 Un aperçu du root word généré
- 📜 Instructions détaillées

### 3. Exécution de la commande

```bash
# Dans le terminal, dossier lostwoodscribework-app
node scripts/addRootWord.js "KEY" "code" "ipa" "meaning" "class"
```

**Exemple concret :**

```bash
node scripts/addRootWord.js "FIRE" "fir" "fir" "élément feu" "élémental"
```

## 🎨 Clavier Phonétique

### 🔵 Consonnes (Bleu)

Toutes les consonnes de `ConsonantsOfLingua` avec leur représentation IPA

### 🔴 Voyelles Principales (Rouge)

Les voyelles principales de `MainVowelsOfLingua`

### 🟡 Voyelles Bis (Jaune)

Les voyelles secondaires de `BisVowelsOfLingua`

### 🟣 Extras (Violet)

Les éléments supplémentaires de `ExtrasOfLingua`

## 📁 Structure des fichiers

```
src/
├── utils/
│   ├── soundsOfLingua.ts      # Sons de base (existant)
│   ├── rootWords.ts           # Divine Root Words (existant)
│   └── customRootWords.ts     # Vos root words personnalisés (nouveau)
├── components/
│   ├── RootWordComposer.tsx   # Interface principale
│   └── RootWordComposer.css   # Styles
scripts/
└── addRootWord.js             # Script d'ajout automatique
```

## 🔧 Fonctionnalités

- ✅ **Clavier phonétique interactif** avec tous les sons disponibles
- ✅ **Prévisualisation IPA** en temps réel
- ✅ **Validation** des champs obligatoires
- ✅ **Génération automatique** de commandes
- ✅ **Sauvegarde hardcodée** dans le projet (pas de base de données)
- ✅ **Interface responsive** et moderne

## 🎯 Avantages

1. **Pas de base de données** - Tout est hardcodé dans le projet
2. **Utilise les sons existants** - Cohérence avec `soundsOfLingua.ts`
3. **Interface intuitive** - Clavier phonétique visuel
4. **Automatisation** - Script d'ajout automatique
5. **Séparation claire** - Divine vs Custom root words

## 📝 Exemple d'utilisation complète

1. **Composer** : Cliquez sur `f` + `i` + `r` = `fir /fir/`
2. **Classe** : `élémental`
3. **Signification** : `élément feu`
4. **Enregistrer** : Génère la commande
5. **Exécuter** : `node scripts/addRootWord.js "FIR" "fir" "fir" "élément feu" "élémental"`
6. **Résultat** : Ajouté automatiquement à `customRootWords.ts`

```typescript
export enum CustomRootWords {
  FIR = "fir (fir)", // élément feu - élémental
}
```

## 🎨 Personnalisation

Pour ajouter de nouveaux types de sons ou modifier l'interface :

1. Modifiez `soundsOfLingua.ts` pour les nouveaux sons
2. Ajustez les mappings IPA dans `RootWordComposer.tsx`
3. Personnalisez les styles dans `RootWordComposer.css`

---

**Profitez bien de votre compositeur de root words ! 🎵✨**
