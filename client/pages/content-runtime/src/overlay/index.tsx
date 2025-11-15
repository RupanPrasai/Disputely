import inlineCss from '../../../dist/index.css?inline';
import { initAppWithShadow } from '@extension/shared';
import App from '@src/overlay/App';

initAppWithShadow({ id: 'CEB-extension-runtime-example', app: <App />, inlineCss });
