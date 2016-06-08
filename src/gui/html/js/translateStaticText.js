'use strict';

(function exportModule(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.loot = root.loot || {};
    root.loot.translateStaticText = factory();
  }
}(this, () => {
  function translatePluginCardTemplate(l10n) {
    /* Plugin card template. */
    const pluginCard = document.getElementById('loot-plugin-card').querySelector('template').content;

    pluginCard.querySelector('paper-tooltip[for=activeTick]').textContent = l10n.translate('Active Plugin');
    pluginCard.querySelector('paper-tooltip[for=isMaster]').textContent = l10n.translate('Master File');
    pluginCard.querySelector('paper-tooltip[for=isEmpty]').textContent = l10n.translate('Empty Plugin');
    pluginCard.querySelector('paper-tooltip[for=loadsArchive]').textContent = l10n.translate('Loads Archive');
    pluginCard.querySelector('paper-tooltip[for=hasUserEdits]').textContent = l10n.translate('Has User Metadata');

    pluginCard.getElementById('editMetadata').lastChild.textContent = l10n.translate('Edit Metadata');
    pluginCard.getElementById('copyMetadata').lastChild.textContent = l10n.translate('Copy Metadata');
    pluginCard.getElementById('clearMetadata').lastChild.textContent = l10n.translate('Clear User Metadata');
  }

  function translatePluginEditorTemplate(l10n) {
    /* Plugin editor template. */
    const pluginEditor = document.getElementById('loot-plugin-editor').querySelector('template').content;

    pluginEditor.getElementById('enableEdits').previousElementSibling.textContent = l10n.translate('Enable Edits');
    pluginEditor.getElementById('isPriorityGlobal').previousElementSibling.textContent = l10n.translate('Global Priority');
    pluginEditor.querySelector('paper-tooltip[for=isPriorityGlobal]').textContent = l10n.translate('Global priorities are compared against all other plugins. Normal priorities are compared against only conflicting plugins.');
    pluginEditor.getElementById('priorityValue').previousElementSibling.textContent = l10n.translate('Priority Value');

    pluginEditor.getElementById('tableTabs').querySelector('[data-for=main]').textContent = l10n.translate('Main');
    pluginEditor.getElementById('tableTabs').querySelector('[data-for=after]').textContent = l10n.translate('Load After');
    pluginEditor.getElementById('tableTabs').querySelector('[data-for=req]').textContent = l10n.translate('Requirements');
    pluginEditor.getElementById('tableTabs').querySelector('[data-for=inc]').textContent = l10n.translate('Incompatibilities');
    pluginEditor.getElementById('tableTabs').querySelector('[data-for=message]').textContent = l10n.translate('Messages');
    pluginEditor.getElementById('tableTabs').querySelector('[data-for=tags]').textContent = l10n.translate('Bash Tags');
    pluginEditor.getElementById('tableTabs').querySelector('[data-for=dirty]').textContent = l10n.translate('Dirty Info');
    pluginEditor.getElementById('tableTabs').querySelector('[data-for=url]').textContent = l10n.translate('Locations');

    pluginEditor.getElementById('after').querySelector('th:first-child').textContent = l10n.translate('Filename');
    pluginEditor.getElementById('after').querySelector('th:nth-child(2)').textContent = l10n.translate('Display Name');
    pluginEditor.getElementById('after').querySelector('th:nth-child(3)').textContent = l10n.translate('Condition');

    pluginEditor.getElementById('req').querySelector('th:first-child').textContent = l10n.translate('Filename');
    pluginEditor.getElementById('req').querySelector('th:nth-child(2)').textContent = l10n.translate('Display Name');
    pluginEditor.getElementById('req').querySelector('th:nth-child(3)').textContent = l10n.translate('Condition');

    pluginEditor.getElementById('inc').querySelector('th:first-child').textContent = l10n.translate('Filename');
    pluginEditor.getElementById('inc').querySelector('th:nth-child(2)').textContent = l10n.translate('Display Name');
    pluginEditor.getElementById('inc').querySelector('th:nth-child(3)').textContent = l10n.translate('Condition');

    pluginEditor.getElementById('message').querySelector('th:first-child').textContent = l10n.translate('Type');
    pluginEditor.getElementById('message').querySelector('th:nth-child(2)').textContent = l10n.translate('Content');
    pluginEditor.getElementById('message').querySelector('th:nth-child(3)').textContent = l10n.translate('Condition');
    pluginEditor.getElementById('message').querySelector('th:nth-child(4)').textContent = l10n.translate('Language');

    pluginEditor.getElementById('tags').querySelector('th:first-child').textContent = l10n.translate('Add/Remove');
    pluginEditor.getElementById('tags').querySelector('th:nth-child(2)').textContent = l10n.translate('Bash Tag');
    pluginEditor.getElementById('tags').querySelector('th:nth-child(3)').textContent = l10n.translate('Condition');

    pluginEditor.getElementById('dirty').querySelector('th:first-child').textContent = l10n.translate('CRC');
    pluginEditor.getElementById('dirty').querySelector('th:nth-child(2)').textContent = l10n.translate('ITM Count');
    pluginEditor.getElementById('dirty').querySelector('th:nth-child(3)').textContent = l10n.translate('Deleted References');
    pluginEditor.getElementById('dirty').querySelector('th:nth-child(4)').textContent = l10n.translate('Deleted Navmeshes');
    pluginEditor.getElementById('dirty').querySelector('th:nth-child(5)').textContent = l10n.translate('Cleaning Utility');

    pluginEditor.getElementById('url').querySelector('th:first-child').textContent = l10n.translate('URL');
    pluginEditor.getElementById('url').querySelector('th:nth-child(2)').textContent = l10n.translate('Name');

    pluginEditor.querySelector('paper-tooltip[for=accept]').textContent = l10n.translate('Save Metadata');
    pluginEditor.querySelector('paper-tooltip[for=cancel]').textContent = l10n.translate('Cancel');
  }

  function translatePluginListItemTemplate(l10n) {
    /* Plugin List Item Template */
    const pluginItem = document.getElementById('loot-plugin-item').querySelector('template').content;

    pluginItem.querySelector('paper-tooltip[for=globalPriorityIcon]').textContent = l10n.translate('Global Priority');
    pluginItem.querySelector('paper-tooltip[for=hasUserEdits]').textContent = l10n.translate('Has User Metadata');
    pluginItem.querySelector('paper-tooltip[for=editorIsOpen]').textContent = l10n.translate('Editor Is Open');
  }

  function translateMessageDialogTemplate(l10n) {
    /* Plugin List Item Template */
    const messageDialog = document.getElementById('loot-message-dialog').querySelector('template').content;

    messageDialog.getElementById('confirm').textContent = l10n.translate('OK');
    messageDialog.getElementById('dismiss').textContent = l10n.translate('Cancel');
  }

  function translateFileRowTemplate(l10n) {
    /* File row template */
    const fileRow = document.getElementById('fileRow').content;

    fileRow.querySelector('.name').setAttribute('error-message', l10n.translate('A filename is required.'));
    fileRow.querySelector('paper-tooltip').textContent = l10n.translate('Delete Row');
  }

  function translateMessageRowTemplate(l10n) {
    /* Message row template */
    const messageRow = document.getElementById('messageRow').content;

    messageRow.querySelector('.type').children[0].textContent = l10n.translate('Note');
    messageRow.querySelector('.type').children[1].textContent = l10n.translate('Warning');
    messageRow.querySelector('.type').children[2].textContent = l10n.translate('Error');
    messageRow.querySelector('.content').setAttribute('error-message', l10n.translate('A content string is required.'));
    messageRow.querySelector('paper-tooltip').textContent = l10n.translate('Delete Row');
  }

  function translateTagRowTemplate(l10n) {
    /* Tag row template */
    const tagRow = document.getElementById('tagRow').content;

    tagRow.querySelector('.type').children[0].textContent = l10n.translate('Add');
    tagRow.querySelector('.type').children[1].textContent = l10n.translate('Remove');
    tagRow.querySelector('.name').setAttribute('error-message', l10n.translate('A name is required.'));
    tagRow.querySelector('paper-tooltip').textContent = l10n.translate('Delete Row');
  }

  function translateDirtyInfoRowTemplate(l10n) {
    /* Dirty Info row template */
    const dirtyInfoRow = document.getElementById('dirtyInfoRow').content;

    dirtyInfoRow.querySelector('.crc').setAttribute('error-message', l10n.translate('A CRC is required.'));
    dirtyInfoRow.querySelector('.itm').setAttribute('error-message', l10n.translate('Values must be integers.'));
    dirtyInfoRow.querySelector('.udr').setAttribute('error-message', l10n.translate('Values must be integers.'));
    dirtyInfoRow.querySelector('.nav').setAttribute('error-message', l10n.translate('Values must be integers.'));
    dirtyInfoRow.querySelector('.util').setAttribute('error-message', l10n.translate('A utility name is required.'));
    dirtyInfoRow.querySelector('paper-tooltip').textContent = l10n.translate('Delete Row');
  }

  function translateLocationRowTemplate(l10n) {
    /* Location row template */
    const locationRow = document.getElementById('locationRow').content;

    locationRow.querySelector('.link').setAttribute('error-message', l10n.translate('A link is required.'));
    locationRow.querySelector('paper-tooltip').textContent = l10n.translate('Delete Row');
  }

  function translateGameRowTemplate(l10n) {
    /* Game row template */
    const gameRow = document.getElementById('gameRow').content;

    gameRow.querySelector('.name').setAttribute('error-message', l10n.translate('A name is required.'));
    gameRow.querySelector('.folder').setAttribute('error-message', l10n.translate('A folder is required.'));
    gameRow.querySelector('paper-tooltip').textContent = l10n.translate('Delete Row');
  }

  function translateNewRowTemplate(l10n) {
    /* New row template */
    const newRow = document.getElementById('newRow').content;

    newRow.querySelector('paper-tooltip').textContent = l10n.translate('Add New Row');
  }

  function translateMainToolbar(l10n) {
    /* Main toolbar */
    const mainToolbar = document.getElementById('mainToolbar');
    mainToolbar.querySelector('paper-tooltip[for=jumpToGeneralInfo]').textContent = l10n.translate('Jump To General Information');
    mainToolbar.querySelector('paper-tooltip[for=sortButton]').textContent = l10n.translate('Sort Plugins');
    mainToolbar.querySelector('paper-tooltip[for=updateMasterlistButton]').textContent = l10n.translate('Update Masterlist');
    document.getElementById('applySortButton').textContent = l10n.translate('Apply');
    document.getElementById('cancelSortButton').textContent = l10n.translate('Cancel');
    mainToolbar.querySelector('paper-tooltip[for=showSearch]').textContent = l10n.translate('Search Cards');

    /* Toolbar menu */
    document.getElementById('redatePluginsButton').lastChild.textContent = l10n.translate('Redate Plugins');
    document.getElementById('openLogButton').lastChild.textContent = l10n.translate('Open Debug Log Location');
    document.getElementById('wipeUserlistButton').lastChild.textContent = l10n.translate('Clear All User Metadata');
    document.getElementById('copyLoadOrderButton').lastChild.textContent = l10n.translate('Copy Load Order');
    document.getElementById('copyContentButton').lastChild.textContent = l10n.translate('Copy Content');
    document.getElementById('refreshContentButton').lastChild.textContent = l10n.translate('Refresh Content');
    document.getElementById('helpButton').lastChild.textContent = l10n.translate('View Documentation');
    document.getElementById('aboutButton').lastChild.textContent = l10n.translate('About');
    document.getElementById('settingsButton').lastChild.textContent = l10n.translate('Settings');
    document.getElementById('quitButton').lastChild.textContent = l10n.translate('Quit');

    /* Search bar */
    document.getElementById('searchBar').shadowRoot.getElementById('search').label = l10n.translate('Search cards');
  }

  function translateSidebar(l10n) {
    /* Nav items */
    document.getElementById('sidebarTabs').firstElementChild.textContent = l10n.translate('Plugins');
    document.getElementById('sidebarTabs').firstElementChild.nextElementSibling.textContent = l10n.translate('Filters');
    document.getElementById('filters').querySelector('paper-tooltip[for=contentFilter]').textContent = l10n.translate('Press Enter or click outside the input to set the filter.');
    document.getElementById('contentFilter').label = l10n.translate('Show only plugins with cards that contain');
    document.getElementById('contentFilter').placeholder = l10n.translate('No text specified');

    /* Filters */
    document.getElementById('hideVersionNumbers').textContent = l10n.translate('Hide version numbers');
    document.getElementById('hideCRCs').textContent = l10n.translate('Hide CRCs');
    document.getElementById('hideBashTags').textContent = l10n.translate('Hide Bash Tags');
    document.getElementById('hideNotes').textContent = l10n.translate('Hide notes');
    document.getElementById('hideDoNotCleanMessages').textContent = l10n.translate('Hide \'Do not clean\' messages');
    document.getElementById('hideAllPluginMessages').textContent = l10n.translate('Hide all plugin messages');
    document.getElementById('hideInactivePlugins').textContent = l10n.translate('Hide inactive plugins');
    document.getElementById('hideMessagelessPlugins').textContent = l10n.translate('Hide messageless plugins');

    const conflictsFilter = document.getElementById('conflictsFilter');
    conflictsFilter.label = l10n.translate('Show only conflicting plugins for');
    conflictsFilter.firstElementChild.textContent = l10n.translate('No plugin selected');
    /* The selected text doesn't update, so force that translation. */
    conflictsFilter.shadowRoot.querySelector('paper-dropdown-menu').shadowRoot.querySelector('paper-input').value = conflictsFilter.shadowRoot.querySelector('paper-dropdown-menu').selectedItem.textContent;

    document.getElementById('hiddenPluginsTxt').textContent = l10n.translate('Hidden plugins:');
    document.getElementById('hiddenMessagesTxt').textContent = l10n.translate('Hidden messages:');
  }

  function translateSummaryCard(l10n) {
    /* Summary */
    document.getElementById('summary').firstElementChild.textContent = l10n.translate('General Information');
    document.getElementById('masterlistRevision').previousElementSibling.textContent = l10n.translate('Masterlist Revision');
    document.getElementById('masterlistDate').previousElementSibling.textContent = l10n.translate('Masterlist Date');
    document.getElementById('totalWarningNo').previousElementSibling.textContent = l10n.translate('Warnings');
    document.getElementById('totalErrorNo').previousElementSibling.textContent = l10n.translate('Errors');
    document.getElementById('totalMessageNo').previousElementSibling.textContent = l10n.translate('Total Messages');
    document.getElementById('activePluginNo').previousElementSibling.textContent = l10n.translate('Active Plugins');
    document.getElementById('dirtyPluginNo').previousElementSibling.textContent = l10n.translate('Dirty Plugins');
    document.getElementById('totalPluginNo').previousElementSibling.textContent = l10n.translate('Total Plugins');
  }

  function translateSettingsDialog(l10n) {
    /* Settings dialog */
    document.getElementById('settingsDialog').querySelector('h2').textContent = l10n.translate('Settings');

    const defaultGameSelect = document.getElementById('defaultGameSelect');
    defaultGameSelect.setAttribute('label', l10n.translate('Default Game'));
    defaultGameSelect.firstElementChild.textContent = l10n.translate('Autodetect');
    /* The selected text doesn't update, so force that translation. */
    defaultGameSelect.shadowRoot.querySelector('paper-dropdown-menu').shadowRoot.querySelector('paper-input').value = defaultGameSelect.shadowRoot.querySelector('paper-dropdown-menu').selectedItem.textContent;

    document.getElementById('languageSelect').setAttribute('label', l10n.translate('Language'));
    document.getElementById('languageLabel').textContent = l10n.translate('Language changes will be applied after LOOT is restarted.');

    document.getElementById('enableDebugLogging').textContent = l10n.translate('Enable debug logging');
    document.getElementById('languageLabel').nextElementSibling.textContent = l10n.translate('The output is logged to the LOOTDebugLog.txt file.');

    document.getElementById('updateMasterlist').textContent = l10n.translate('Update masterlist before sorting');

    const gameSettings = document.getElementById('gameSettings');
    gameSettings.querySelector('.name').setAttribute('label', l10n.translate('Name'));
    gameSettings.querySelector('.type').setAttribute('label', l10n.translate('Base Game'));
    gameSettings.querySelector('.folder').setAttribute('label', l10n.translate('LOOT Folder'));
    gameSettings.querySelector('.master').setAttribute('label', l10n.translate('Master File'));
    gameSettings.querySelector('.repo').setAttribute('label', l10n.translate('Masterlist Repository URL'));
    gameSettings.querySelector('.branch').setAttribute('label', l10n.translate('Masterlist Repository Branch'));
    gameSettings.querySelector('.path').setAttribute('label', l10n.translate('Install Path'));
    gameSettings.querySelector('.registry').setAttribute('label', l10n.translate('Install Path Registry Key'));

    document.getElementById('settingsDialog').getElementsByClassName('accept')[0].textContent = l10n.translate('Apply');
    document.getElementById('settingsDialog').getElementsByClassName('cancel')[0].textContent = l10n.translate('Cancel');
  }

  function translateFirstRunDialog(l10n) {
    /* First-run dialog */
    const firstRun = document.getElementById('firstRun');
    firstRun.querySelector('h2').textContent = l10n.translate('First-Time Tips');

    firstRun.querySelector('li:nth-child(3)').textContent = l10n.translate('CRCs are only displayed after plugins have been loaded, either by conflict filtering, or by sorting.');
    firstRun.querySelector('li:nth-child(4)').textContent = l10n.translate('Double-click a plugin in the sidebar to quickly open it in the metadata editor.');
    firstRun.querySelector('li:nth-child(5)').textContent = l10n.translate('Plugins can be drag and dropped from the sidebar into the metadata editor\'s "load after", "requirements" and "incompatibility" tables.');
    firstRun.querySelector('li:nth-child(6)').textContent = l10n.translate('Some features are disabled while the metadata editor is open, or while there is a sorted load order that has not been applied or discarded.');
    firstRun.querySelector('li:last-child').textContent = l10n.translate('Many interface elements have tooltips. If you don\'t know what something is, try hovering your mouse over it to find out. Otherwise, LOOT\'s documentation can be accessed through the main menu.');

    firstRun.getElementsByTagName('paper-button')[0].textContent = l10n.translate('OK');
  }

  return (l10n) => {
    translatePluginCardTemplate(l10n);
    translatePluginEditorTemplate(l10n);
    translatePluginListItemTemplate(l10n);
    translateMessageDialogTemplate(l10n);

    translateFileRowTemplate(l10n);
    translateMessageRowTemplate(l10n);
    translateTagRowTemplate(l10n);
    translateDirtyInfoRowTemplate(l10n);
    translateLocationRowTemplate(l10n);
    translateGameRowTemplate(l10n);
    translateNewRowTemplate(l10n);

    translateMainToolbar(l10n);
    translateSidebar(l10n);

    translateSummaryCard(l10n);
    translateSettingsDialog(l10n);
    translateFirstRunDialog(l10n);
  };
}));
