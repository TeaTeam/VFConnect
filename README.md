# VFConnect

Un proyecto para *__INS7501__*

**Examen Transversal**

## Equipo

[Benjamín Calisto](https://github.com/KBeDeveloper)
<br>
[Camilo Montupil](https://github.com/camiloJTG)
<br>
[Bryan Ortiz](https://github.com/RoyalSylphID)
<br>
[Sergio Vidal](https://github.com/ZergoX)

## Recursos

[Git](https://git-scm.org/)
<br>
[NodeJS Environment](https://nodejs.org/)
<br>
[NPM package manager](https://www.npmjs.com/)
<br>
[Electron JS Framework](https://github.com/electron/electron)
<br>
[Bootstrap CSS Framework](https://github.com/twbs/bootstrap)
<br>
[Sha.js libraries](https://libraries.io/npm/sha.js/2.3.0)

## Instrucciones y advertencias

### Consideraciones

1. node_modules incluidos parcialmente.
2. Las dependencias de <code>electron@5.0.3</code> deben ser instaladas de manera local.
3. Para detalles precisos, revisar dependencias en [package.json](./package.json) en el repositorio actual.

### Instrucciones de instalación y ejecución

**Importar repositorio**

*Desde branch master*

```shell
$ git clone 'https://github.com/TeaTeamSoft/VFConnect.git'
```

*Ingresar a la carpeta*

```shell
$ cd VFConnect
```

**Instalar dependencias de ElectronJS**

*Local para versión específica*

```shell
$ npm install electron@5.0.3
```
*Local para última versión publicada*
```shell
$ npm install --save electron
```
*Global para versión específica*

```shell
$ npm install -g electron@5.0.3
```
*Global para última versión publicada*
```shell
$ npm install -g electron
```

*Referenciar módulo de electron* <code>global</code> *a repositorio local*
```shell
$ npm link electron
```

**Iniciar aplicación**

*Con Electron instalado de forma local o global*
```shell
$ npm start
```

*Exclusivo para instalación global*
```shell
$ electron .
```