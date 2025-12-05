# 📘 Guide d'utilisation - Site VTI

Bienvenue dans le guide complet pour gérer et modifier votre site web VTI !

---

## 🚀 Démarrage rapide

### Étape 1 : Lancer le site

#### Option A - Double-clic (la plus simple)
```
Double-cliquez sur le fichier vti.html
→ Il s'ouvre automatiquement dans votre navigateur
```

#### Option B - Depuis le terminal

**Sur Mac :**
```bash
open vti.html
```

**Sur Linux :**
```bash
xdg-open vti.html
```

**Sur Windows :**
```bash
start vti.html
```

#### Option C - Avec un serveur local (recommandé pour les tests)

1. **Ouvrez le terminal dans le dossier du fichier :**
```bash
cd /chemin/vers/votre/dossier
```

2. **Lancez le serveur avec Python :**
```bash
# Python 3
python3 -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

3. **Ouvrez votre navigateur et allez sur :**
```
http://localhost:8000
```

4. **Pour arrêter le serveur :**
```
Appuyez sur Ctrl + C dans le terminal
```

---

## 📝 Guide de modification du site

### 1️⃣ Modifier les informations de l'entreprise

#### 🔍 Où trouver ?
Cherchez dans le code HTML cette ligne :
```html
<!-- VOUS POUVEZ MODIFIER CES INFORMATIONS -->
```

#### ✏️ Que modifier ?
```html
<p>📍 <strong>Adresse :</strong> Casablanca, Maroc</p>
<p>📞 <strong>Téléphone :</strong> +212 XXX-XXXXXX</p>
<p>📧 <strong>Email :</strong> contact@vti.ma</p>
<p>🕐 <strong>Horaires :</strong> Lundi - Vendredi : 8h - 18h</p>
```

---

### 2️⃣ Modifier un produit existant dans le catalogue

#### 🔍 Où trouver ?
Cherchez cette section :
```html
<!-- SECTION CATALOGUE - AJOUTEZ/MODIFIEZ LES PRODUITS ICI -->
```

#### 📦 Structure d'un produit

Chaque produit suit cette structure :
```html
<div class="produit-card">
    <!-- 1. IMAGE DU PRODUIT -->
    <img src="URL_DE_L_IMAGE" alt="Description">
    
    <!-- 2. NOM DU PRODUIT -->
    <h3>Nom du produit</h3>
    
    <!-- 3. RÉFÉRENCE -->
    <p class="produit-reference">Réf: CODE-REFERENCE</p>
    
    <!-- 4. DESCRIPTION -->
    <p>Description détaillée du produit</p>
    
    <!-- 5. PRIX -->
    <p class="produit-prix">Prix ici</p>
    
    <!-- 6. STATUT DE STOCK -->
    <span class="stock-badge en-stock">✓ En stock</span>
</div>
```

#### ✏️ Exemples de modifications

**Changer le nom d'un produit :**
```html
<!-- AVANT -->
<h3>Aiguilles Industrielles</h3>

<!-- APRÈS -->
<h3>Aiguilles Schmetz Premium</h3>
```

**Changer la référence :**
```html
<!-- AVANT -->
<p class="produit-reference">Réf: AIG-2024-001</p>

<!-- APRÈS -->
<p class="produit-reference">Réf: AIG-2024-125</p>
```

**Changer le prix :**
```html
<!-- AVANT -->
<p class="produit-prix">Sur devis</p>

<!-- APRÈS -->
<p class="produit-prix">450 MAD</p>
```

**Changer le statut de stock :**

Pour **EN STOCK** :
```html
<span class="stock-badge en-stock">✓ En stock</span>
```

Pour **RUPTURE DE STOCK** :
```html
<span class="stock-badge rupture-stock">✗ Rupture de stock</span>
```

⚠️ **Important** : Utilisez exactement `en-stock` ou `rupture-stock` (avec le tiret)

---

### 3️⃣ Ajouter une image de produit

#### 🖼️ Méthode 1 : Utiliser une image d'Internet

1. **Trouvez votre image** sur Google Images, Unsplash, Pexels, etc.
2. **Faites clic droit** sur l'image → **"Copier l'adresse de l'image"**
3. **Collez l'URL** dans le code :

```html
<img src="COLLEZ_L_URL_ICI" alt="Description de l'image">
```


#### 📁 Méthode 2 : Utiliser vos propres images (recommandé)

1. **Créez un dossier `images`** à côté de votre fichier `vti.html`
```
mon-site/
├── vti.html
└── images/
    ├── aiguilles.jpg
    ├── courroies.jpg
    └── bobines.jpg
```

2. **Référencez l'image** dans le code :
```html
<img src="images/aiguilles.jpg" alt="Aiguilles industrielles">
```

#### 🎨 Conseils pour les images
- Format recommandé : **JPG** ou **PNG**
- Taille recommandée : **400-800 pixels de largeur**
- Poids recommandé : **moins de 500 Ko** par image

---

### 4️⃣ Ajouter un nouveau produit au catalogue

#### 📋 Étapes à suivre

**Étape 1** : Trouvez cette ligne dans le code :
```html
<!-- POUR AJOUTER UN NOUVEAU PRODUIT : -->
```

**Étape 2** : Copiez **TOUT** le bloc d'un produit existant :
```html
<div class="produit-card">
    <img src="https://..." alt="...">
    <h3>...</h3>
    <p class="produit-reference">...</p>
    <p>...</p>
    <p class="produit-prix">...</p>
    <span class="stock-badge ...">...</span>
</div>
```

**Étape 3** : Collez-le **juste avant** la ligne de commentaire :
```html
    </div> <!-- Fin du produit précédent -->

    <!-- VOTRE NOUVEAU PRODUIT ICI -->
    <div class="produit-card">
        <img src="URL_NOUVELLE_IMAGE" alt="Nouveau produit">
        <h3>Nom du nouveau produit</h3>
        <p class="produit-reference">Réf: NVX-2024-001</p>
        <p>Description du nouveau produit</p>
        <p class="produit-prix">999 MAD</p>
        <span class="stock-badge en-stock">✓ En stock</span>
    </div>

    <!-- POUR AJOUTER UN NOUVEAU PRODUIT : -->
```

**Étape 4** : Modifiez toutes les informations du nouveau produit

---

### 5️⃣ Supprimer un produit

#### 🗑️ Comment faire ?

1. **Trouvez le bloc du produit** que vous voulez supprimer
2. **Sélectionnez depuis** `<div class="produit-card">` 
3. **Jusqu'à** `</div>` (le premier qui ferme ce bloc)
4. **Supprimez tout** ce contenu

**Exemple :**
```html
<!-- SUPPRIMEZ TOUT CE BLOC -->
<div class="produit-card">
    <img src="..." alt="...">
    <h3>Produit à supprimer</h3>
    <p class="produit-reference">Réf: XXX-001</p>
    <p>Description...</p>
    <p class="produit-prix">...</p>
    <span class="stock-badge ...">...</span>
</div>
<!-- FIN DU BLOC À SUPPRIMER -->
```

⚠️ **Attention** : Vérifiez que vous supprimez bien la balise `<div>` ouvrante ET fermante `</div>`

---

### 6️⃣ Modifier les couleurs du site

#### 🎨 Où trouver les couleurs ?

Les couleurs sont définies dans la section `<style>` en haut du fichier HTML.

#### 🔵 Couleur principale (bleu)

Cherchez cette ligne :
```css
background-color: #1a5490;
```

**Pour changer la couleur** :
- Trouvez un code couleur sur [HTML Color Picker](https://htmlcolorcodes.com/fr/)
- Remplacez `#1a5490` par votre nouveau code

**Exemples de couleurs :**
```css
#1a5490  → Bleu (actuel)
#27ae60  → Vert
#e74c3c  → Rouge
#8e44ad  → Violet
#f39c12  → Orange
#2c3e50  → Gris foncé
```

#### 🎨 Liste des endroits où changer la couleur principale

Cherchez et remplacez `#1a5490` dans ces sections :
```css
header {
    background-color: #1a5490;  /* Couleur de l'en-tête */
}

section h2 {
    color: #1a5490;  /* Couleur des titres de section */
}

label {
    color: #1a5490;  /* Couleur des labels de formulaire */
}

button {
    background-color: #1a5490;  /* Couleur des boutons */
}

footer {
    background-color: #1a5490;  /* Couleur du pied de page */
}
```

💡 **Conseil** : Utilisez la fonction "Rechercher et Remplacer" de votre éditeur :
- **Ctrl + H** (Windows/Linux)
- **Cmd + H** (Mac)
- Recherchez : `#1a5490`
- Remplacez par : `votre nouveau code couleur`

---

### 7️⃣ Modifier le titre du site

#### 📌 Titre dans l'onglet du navigateur

Cherchez cette ligne dans la section `<head>` :
```html
<title>VTI - Fournitures et Machines Textiles</title>
```

Modifiez-la :
```html
<title>Votre nouveau titre</title>
```

#### 📌 Titre principal en haut de page

Cherchez cette ligne dans la section `<header>` :
```html
<h1>🧵 VTI - Fournitures Textiles</h1>
```

Modifiez-la :
```html
<h1>🧵 Votre nouveau nom</h1>
```

---

## 🛠️ Dépannage et astuces

### ❌ Problème : Le site ne s'affiche pas correctement

**Solution : Rafraîchissez le cache**
- Appuyez sur **Ctrl + F5** (Windows/Linux)
- Appuyez sur **Cmd + Shift + R** (Mac)

### ❌ Problème : Les images ne s'affichent pas

**Vérifiez que :**
1. L'URL de l'image est correcte
2. L'image existe bien dans le dossier `images/`
3. Le chemin est correct : `images/nom-image.jpg` (attention à la casse)

### ❌ Problème : Le code est "cassé" après modification

**Solutions :**
1. Vérifiez que vous n'avez pas supprimé de balises fermantes `</...>`
2. Vérifiez que les guillemets sont bien fermés `"..."`
3. Gardez toujours une copie de sauvegarde avant de modifier !

### 💡 Conseil : Utilisez un bon éditeur de code