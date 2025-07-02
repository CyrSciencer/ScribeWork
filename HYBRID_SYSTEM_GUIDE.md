# 🎯 Guide du Système Hybride LinguaSite

## 📋 Vue d'Ensemble

Le système hybride LinguaSite utilise **localStorage + Export/Import JSON** pour gérer la base de données des root words. Aucun serveur n'est requis !

## 🏗️ Architecture du Système

### **Fichiers Principaux**

- `src/utils/hybridDatabase.ts` - 🎯 **Système principal**
- `src/components/databaseViewer/HybridDatabaseViewer.tsx` - Interface de gestion
- `src/components/databaseViewer/HybridStyles.css` - Styles des contrôles

### **Pages de l'Application**

- **Page 1** : Root Word Composer - Création de nouveaux root words
- **Page 2** : Root Words - Visualisation des mots divins fixes
- **Page 3** : Hybrid Database Viewer - Gestion Export/Import

## 💾 Fonctionnement de la Persistance

### **Double Sécurité**

1. **localStorage** : Sauvegarde automatique immédiate + backup
2. **Fichiers JSON** : Export/Import pour portabilité

### **Workflow Typique**

```
Créer Root Word → localStorage automatique → Export JSON → Partage/Commit → Import sur autre PC
```

## 🔧 Utilisation

### **1. Créer des Root Words**

1. Aller à la **Page 1** (Root Word Composer)
2. Choisir pattern CCV ou CVV
3. Composer le mot avec les boutons sons
4. Ajouter classe et signification
5. **Sauvegarder** → ✅ localStorage automatique

### **2. Exporter la Base de Données**

1. Aller à la **Page 3** (Database Viewer)
2. Cliquer **"📥 Exporter JSON"**
3. Fichier téléchargé : `rootwords_[timestamp].json`
4. Sauvegarder le fichier en lieu sûr

### **3. Importer des Données**

1. Avoir un fichier JSON d'export
2. Page 3 → **"📤 Importer JSON"**
3. Sélectionner le fichier
4. ✅ Données importées + sauvegardées dans localStorage

### **4. Fonctionnalités de Sécurité**

- **"🔄 Restaurer Backup"** : Récupère la sauvegarde localStorage précédente
- **"🗑️ Tout Effacer"** : Supprime toutes les données (avec confirmation)

## 🌍 Synchronisation Multi-Ordinateurs

### **Méthode Simple**

1. **Ordinateur A** : Créer root words + Exporter JSON
2. **Transfert** : Email, Git, USB, cloud
3. **Ordinateur B** : Importer JSON
4. ✅ **Synchronisé** !

### **Avec Git**

```bash
# Après export JSON
git add exported_rootwords.json
git commit -m "Add new root words"
git push

# Sur autre ordinateur
git pull
# → Importer le nouveau JSON via l'interface
```

## 📊 Structure des Données

### **Format JSON d'Export**

```json
{
  "wordClasses": {
    "prefixe": [
      {
        "ipa": "bla",
        "font": "BLAM",
        "signification": "exemple"
      }
    ],
    "suffixe": [],
    "racine": [],
    "modificateur": [],
    "connecteur": []
  },
  "lastUpdated": "2024-01-20T15:30:00.000Z",
  "version": "1.0.0",
  "metadata": {
    "totalWords": 1,
    "totalClasses": 5,
    "exportedBy": "LinguaSite Root Words App"
  }
}
```

## 🎯 Avantages du Système Hybride

| Feature                   | Bénéfice                                          |
| ------------------------- | ------------------------------------------------- |
| **Zéro serveur**          | Fonctionne partout (Netlify, GitHub Pages, local) |
| **localStorage**          | Sauvegarde immédiate, survit aux refreshs         |
| **Export/Import**         | Portabilité totale, contrôle utilisateur          |
| **Backup automatique**    | Sécurité contre la perte de données               |
| **Multi-ordinateurs**     | Synchronisation via fichiers JSON                 |
| **Compatible production** | 100% statique, pas de backend                     |

## 🚀 Déploiement

### **Développement**

```bash
yarn start
```

### **Production (Netlify/Vercel)**

```bash
yarn build
# → Upload du dossier build/
```

**Aucune configuration serveur requise !**

## 🔍 Dépannage

### **Données perdues après refresh ?**

- ✅ Impossible avec le nouveau système
- localStorage + backup automatique

### **Import JSON échoue ?**

- Vérifier que le fichier est un export valide
- Structure JSON correcte requise

### **Synchronisation entre ordinateurs ?**

- Exporter JSON sur ordinateur source
- Importer JSON sur ordinateur cible

## 📝 Notes Techniques

- **TypeScript** : Typé complet pour la sécurité
- **React Hooks** : useState, useRef pour la gestion d'état
- **File API** : Import de fichiers sécurisé
- **Blob API** : Export de fichiers optimisé
- **localStorage** : Persistance navigateur native

## 🎉 Système Prêt !

Le système hybride est **complet, nettoyé et prêt à l'emploi** !
Aucun serveur, aucune configuration complexe, 100% portable.
