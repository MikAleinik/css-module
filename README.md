# Использование CSS Modules в TypeScript

## Выполнить настроику правил в WebPack
Для использования модулей CSS добавить правило распознавания файлов стилей, в которых перед расширением присутствует префикс `module` -> `.module.css`
```js
module: {
    rules: [
        {
            test: /\.module.css$/i,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                        },
                    },
                }
            ],
        },
    ],
},
```
Для возможности использования обычных CSS добавить следом правило, в котором определяется обработка всех файлов CSS за исключением `.module.css`
```js
module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            exclude: /\.module.css$/i
        },
    ],
},
```
## Подключение плагина для TypeScript
Установить плагин в зависимости для разработки
```bash
npm i -D typescript-plugin-css-modules
```
Указать использование плагина в `tsconfig.json`
```json
{
    "compilerOptions": {
        "plugins": [
            {
              "name": "typescript-plugin-css-modules",
            }
          ]
    }
}
```
В каталоге `src` (или ином для вашего проекта, но в котором находится точка входа в приложение) создать файл `global.d.ts` и определить в нем декларацию для модулей CSS
```ts
declare module '*.module.css';
```
## Настройка VSCode
Открыть команды редактора `CTRL+SHIFT+P`<br>
Выполнить команду `TypeScript: Select TS Version` и выбрать `Use Workspace Version`<br>
Выполнить команду `TypeScript: Restart TS Server`
