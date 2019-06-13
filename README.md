# VFConnect

Un proyecto para *__INS7501__*

**Examen Transversal**

## Equipo

[Benjamín Calisto](https://github.com/KBeDeveloper)
<br/>
[Camilo Montupil](https://github.com/camiloJTG)
<br/>
[Bryan Ortiz](https://github.com/RoyalSylphID)
<br/>
[Sergio Vidal](https://github.com/ZergoX)

## Recursos

[NPM package manager](https://www.npmjs.com/)
<br/>
[Electron](https://github.com/electron/electron)
<br/>
[Bootstrap](https://github.com/twbs/bootstrap)
<br/>
[Sha.js](https://libraries.io/npm/sha.js/2.3.0)

## Instrucciones y advertencias

### Consideraciones

1. node_modules incluidos parcialmente.
2. Las dependencias de <code>electron@5.0.3</code> deben ser instaladas de manera local.

### Instrucciones de instalación y ejecución

**Clonación de repositorio (Git version >=1.7.10)**

*Desde branch desktop* **[DESCONTINUADO]**

<code>$ git clone -b desktop --single-branch 'https://github.com/TeaTeamSoft/VFConnect.git'</code><br>

*Desde branch master*

<code>git clone 'https://github.com/TeaTeamSoft/VFConnect.git'</code>

*Ingresar a la carpeta*

<code>$ cd VFConnect</code>

**Instalar dependencias de ElectronJS**

*Local*

<code>$ npm install electron@5.0.3</code><br>o<br><code>$ npm install --save electron</code>

*Global*

<code>$ npm install -g electron@5.0.3</code><br>
<code>$ npm link electron</code>

**Iniciar aplicación**

*Con Electron instalado de forma local o global*

<code>$ npm start</code>

*Exclusivo para instalación global*

<code>$ electron .</code>