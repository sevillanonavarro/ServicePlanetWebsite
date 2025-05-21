const { Tolgee, InContextTools, FormatSimple, BackendFetch } = window['@tolgee/web'];
const tolgee = Tolgee()
  .use(InContextTools())
  .use(FormatSimple())
  .use(BackendFetch())
  .init({
    // ############################################################
    // ## you should never leak your API key                     ##
    // ## remove it in for production publicly accessible site   ##
    // ############################################################
    apiKey: 'tgpak_gjptezdomvwgw3ttmfuweobxnbvxg3jqnftdmn3jmzrds',
    apiUrl: 'http://localhost:8080',
    defaultLanguage: 'en',
    observerType: 'text',
    observerOptions: { inputPrefix: '{{', inputSuffix: '}}' },
  });

tolgee.run()

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function (e) {
      tolgee.changeLanguage(option.getAttribute('data-value'));
    });
  });
