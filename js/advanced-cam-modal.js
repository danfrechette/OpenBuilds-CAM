let metadata = {
  'tOpName'              :{          'rank':  0, 'id':"tOpName"},
  'camOperation'         :{'tmpl':5, 'rank':  1, 'id':"toperation"},
  'camToolDia'           :{'tmpl':1, 'rank':  2, 'id':"ttooldia", 'title': "Endmill / Pen Diameter", 'defval': "6.35", 'imgsrc':"images/endmilldia.svg", 'units': "mm", 'tr_class': "inputcnc inputpocket inputtooldia inputdrill inputplotter", 'min': 0 },
  'camStepover'          :{'tmpl':1, 'rank':  3, 'id':"tstepover",'title': "Stepover", 'defval': "40", 'imgsrc':"images/endmilldia.svg", 'units': "%", 'tr_class': "inputpocket", 'min': 0},
  'camZClearance'        :{'tmpl':2, 'rank':  4, 'id':"tclearanceHeight", 'title': "Z Safe Height", 'defval': "10", 'icon':"fas fa-arrows-alt-v fa-fw", 'units': "mm", 'tr_class': "inputcnc inputpocket inputplasma inputdragknife inputlaser inputlaserraster inputdrill", 'min': 0, },
  'camDragOffset'        :{'tmpl':1, 'rank':  5, 'id':"tdragoffset", 'title': "Drag Knife: Center Offset", 'defval': "1", 'imgsrc':"images/dragoffset.svg", 'units': "mm", 'tr_class': "inputdragknife", 'min': 0 },
  'camLaserPower'        :{'tmpl':2, 'rank':  6, 'id':"tpwr", 'title': "Laser: Power", 'defval': "100", 'icon':"fas fa-tachometer-alt fa-fw", 'units': "%", 'tr_class': "inputlaser inputlaserraster", 'min': 1, 'max': 100, },
  'camSpotSize'          :{'tmpl':1, 'rank':  7, 'id':"tspotsize", 'title': "Laser: Kerf / Line Spacing", 'defval': "0.1", 'imgsrc':"images/kerf.svg", 'units': "mm", 'tr_class': "inputlaser inputlaserraster inputpenraster", 'min': 0.1 , 'max': 5},
  'camFillAngle'         :{'tmpl':1, 'rank':  8, 'id':"tfillAngle", 'title': "Fill: Angle", 'defval': "0", 'imgsrc':"images/protractor.svg", 'units': "deg", 'tr_class': "inputlaserraster inputpenraster", 'min': 0.1 , 'max': 5 },
  'camZStep'             :{'tmpl':2, 'rank':  9, 'id':"tzstep", 'title': "Cut Depth: per Pass", 'defval': "1", 'icon':"fas fa-sort-amount-down fa-fw", 'units': "mm", 'tr_class': "inputcnc inputpocket inputdrillpeck", 'min': 0 },
  'camZDepth'            :{'tmpl':2, 'rank': 10, 'id':"tzdepth", 'title': "Cut Depth: Final", 'defval': "6", 'units':"mm", 'icon': "fas fa-level-down-alt fa-fw", 'tr_class': "inputcnc inputpocket inputdrill", 'min':0},
  'camFeedrate'          :{'tmpl':2, 'rank': 11, 'id':"tspeed", 'title': "Feedrate (X/Y)", 'defval': "1000", 'icon':"fas fa-exchange-alt fa-fw", 'units': "mm/min", 'tr_class': "inputcnc inputpocket inputdragknife inputlaser inputlaserraster inputplasma inputplotter inputpenraster", 'min': 0 },
  'camPlungerate'        :{'tmpl':2, 'rank': 12, 'id':"tplungespeed", 'title': "Feedrate: Plunge", 'defval': "300", 'icon':"fas fa-exchange-alt fa-fw", 'iconrot': 90, 'units': "mm/min", 'tr_class': "inputcnc inputpocket inputdrill", 'min': 0 },
  'camPlasmaKerf'        :{'tmpl':1, 'rank': 13, 'id':"tplasmakerf", 'title': "Plasma: Kerf", 'defval': "1.2", 'imgsrc':"images/kerf.svg", 'units': "mm", 'tr_class': "inputplasma", 'min': 0},
  'camPlasmaPierceHeight':{'tmpl':2, 'rank': 14, 'id':"tplasmapierceheight", 'title': "Plasma: Pierce Height", 'defval': "4", 'icon':"fas fa-meteor fa-fw", 'iconrot': -45, 'units': "mm", 'tr_class': "inputplasma", 'min': 0},
  'camPlasmaPierceDelay' :{'tmpl':2, 'rank': 15, 'id':"tplasmapiercedelay", 'title': "Plasma: Pierce Delay", 'defval': "1.5", 'icon':"far fa-clock fa-fw", 'units': "seconds", 'tr_class': "inputplasma", 'min': 0},
  'camPlasmaZHeight'     :{'tmpl':2, 'rank': 16, 'id':"tplasmazheight", 'title': "Plasma: Cut Height", 'defval': "1.5", 'icon':"fas fa-arrows-alt-v fa-fw", 'units': "mm", 'tr_class': "inputplasma", 'min': 0 },
  'camPlasmaLeadinDist'  :{'tmpl':2, 'rank': 17, 'id':"tplasmaleadin", 'title': "Plasma: Lead-In Distance", 'defval': "5", 'icon':"fas fa-drafting-compass fa-fw", 'units': "mm", 'tr_class': "inputplasma", 'min': 0 },
  'camPlasmaIHS'         :{'tmpl':3, 'rank': 18, 'id':"tplasmaihs", 'title': "Plasma: Touch-Off Zero", 'defval': "No", 'icon':"far fa-arrow-alt-circle-down fa-fw", 'tr_class': "inputplasma", 'option':['No', 'Yes'] },
  'camPenUp'             :{'tmpl':2, 'rank': 19, 'id':"tpenup", 'title': "Plotter: Pen Up", 'defval': "255", 'icon':"far fa-edit fa-fw", 'units': "M3Sxxx", 'tr_class': "inputplotter inputpenraster", 'min': 0},
  'camPenDown'           :{'tmpl':2, 'rank': 20, 'id':"tpendown", 'title': "Plotter: Pen Down", 'defval': "0", 'icon':"fas fa-edit fa-fw", 'units': "M3Sxxx", 'tr_class': "inputplotter inputpenraster", 'min': 0},
  'advanced'             :{'tmpl':4, 'rank': 21, 'id':"advanced"},
  'camPasses'            :{'tmpl':2, 'rank': 22, 'id':"tPasses", 'title': "Muliple passes:", 'defval': "1", 'icon':"fas fa-sort-amount-down fa-fw", 'units': "x", 'tr_class': "inputlaser inputlaserraster", 'min': 1},
  'camDirection'         :{'tmpl':3, 'rank': 23, 'id':"tdirection", 'title': "Cutting Direction:", 'defval': "Climb", 'icon':"fas fa-compress fa-fw", 'tr_class': "inputcnc inputpocket", 'option': ['Climb', 'Conventional'] },
  'camUnion'             :{'tmpl':3, 'rank': 24, 'id':"tunion", 'title': "Geometry: Merge", 'defval': "No", 'icon':"fas fa-compress fa-fw", 'tr_class': "inputplasma inputcnc inputpocket inputdragknife inputlaser inputlasernooffset", 'option':['No', 'Yes'] },
  'tRampPlunge'          :{'tmpl':3, 'rank': 25, 'id':"tRampPlunge", 'title': "Plunge: Ramp In<br><div class=\"text-small\">[beta] Experimental!</div>", 'defval': "No", 'icon':"fas fa-ruler fa-fw", 'tr_class': "inputcnc inputpocket", 'option':['No', 'Yes'] },
  'camZStart'            :{'tmpl':2, 'rank': 26, 'id':"tstartHeight", 'title': "Cut Depth: Start", 'defval': "0", 'icon':"fas fa-indent fa-fw", 'iconrot': 90, 'units': "mm", 'tr_class': "inputcnc inputpocket", 'min': 1},
  'camTabDepth'          :{'tmpl':2, 'rank': 27, 'id':"tabdepth", 'title': "Tabs: Height", 'defval': "0", 'icon':"fas fa-text-height fa-fw", 'units': "mm", 'tr_class': "inputcnc", 'min':0},
  'camTabWidth'          :{'tmpl':2, 'rank': 28, 'id':"tabWidth", 'title': "Tabs: Width", 'defval': "6", 'icon':"fas fa-text-width fa-fw", 'units': "mm", 'tr_class': "inputcnc", 'min': 0},
  'camTabSpace'          :{'tmpl':2, 'rank': 29, 'id':"tabSpace", 'title': "Tabs: Spacing", 'defval': "50", 'icon':"fas fa-ruler-horizontal fa-fw", 'units': "mm", 'tr_class': "inputcnc", 'min': 0},
};

let metadata_Std = ['camOperation', 'camToolDia', 'camStepover', 'camZClearance', 'camDragOffset', 'camLaserPower', 'camSpotSize', 'camFillAngle', 'camZStep', 'camZDepth', 'camFeedrate', 'camPlungerate', 'camPlasmaKerf', 'camPlasmaPierceHeight', 'camPlasmaPierceDelay', 'camPlasmaZHeight', 'camPlasmaLeadinDist', 'camPlasmaIHS', 'camPenUp', 'camPenDown'];
let metadata_Adv = ['camPasses', 'camDirection', 'camUnion', 'tRampPlunge', 'camZStart', 'camTabDepth', 'camTabWidth', 'camTabSpace'];

var metadataRanked = Object.keys(metadata).sort((a, b) => metadata[a].rank > metadata[b].rank ? 1 : -1 );

function template_01(i, elem, tlprof=false){
  var str =
  `<tr class="${elem.tr_class}">
    <td>${elem.title}</td>
    <td><div class="input-addon">
        <span class="icon input-addon-label-left active-border"><img class="fa-fw" src="${elem.imgsrc}" width="16px" height="16px"></img></span>
        <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border"
          value="${elem.defval}" id="${elem.id}${i}" objectseq="${i}" min="${elem.min}"` +
          (elem.hasOwnProperty('max') ? ` max ="${elem.max}"` : '') +  `  step="any">
        <span class="input-addon-label-right active-border">${elem.units}</span>`
        //+ (tlprof ? `<span id="toolprf_TID_${elem.id}" class="input-addon-label-right active-border"><span class="fa fa-toggle-off"></span></span>` : ``) +
        + incToggle(tlprof, elem.id) +
    `</div></td></tr>`;
  return str.replace(/\s{2}/g, '').trim();
};

function template_02(i, elem, tlprof=false){
  var str =
  `<tr class="${elem.tr_class}">
    <td>${elem.title}</td>
    <td><div class="input-addon">
        <span class="icon input-addon-label-left active-border">
          <i class="${elem.icon}"` + (elem.hasOwnProperty('iconrot') ? ` data-fa-transform="rotate-${elem.iconrot}"` : "") + `></i>
        </span>
        <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border"
          value="${elem.defval}" id="${elem.id}${i}" objectseq="${i}" min="${elem.min}"` +
          (elem.hasOwnProperty('max') ? `max ="${elem.max}"` : '') + ` step="any">
        <span class="input-addon-label-right active-border">${elem.units}</span>`
        + incToggle(tlprof, elem.id) +
    `</div></td></tr>`;
  return str.replace(/\s{2}/g, '').trim();
};

function profTmpl_Options(i, elem, tlprof=false){
  var str =
  `<tr class="${elem.tr_class}">
    <td>${elem.title}</td>
    <td><div class="input-addon">
        <span class="icon input-addon-label-left active-border">
          <i class="${elem.icon}"` + (elem.hasOwnProperty('iconrot') ? ` data-fa-transform="rotate-${elem.iconrot}"` : "") + `></i>
        </span>
        <select class="cam-form-field cam-form-field-right active-border" id="${elem.id}${i}" objectseq="${i}"
                style="width: -webkit-fill-available; border-left: solid 1px #ccc; padding: 0px; padding-left: 10px;">` +
                elem.option.map( a => a= "<option" + (a == elem.defval ? ` selected>${a}` : `>` + a ) + `</option>` ).toString().replaceAll('>,<','><') +
        `</select>`
        + incToggle(tlprof, elem.id) +
    `</div></td></tr>`;
  return str.replace(/\s{2}/g, '').trim();
};

function profTmpl_CutType(i, elem, tlprof=false){
  var str =
  `<tr>
    <td>Type of cut: </td>
    <td>
      <div class="input-addon">
        <span class="icon input-addon-label-left active-border"><i class="fa fa-wrench fa-fw" aria-hidden="true"></i></span>
        <select
          class="cam-form-field cam-form-field-right active-border camOperationSelect"
          id="${elem.id}${i}"
          objectseq="${i}"
          style="width: 100%; border-left: solid 1px #ccc; padding: 0px; padding-left: 10px;"
          title="Type of Cut"
        >
          <option>... Select Operation ...</option>
          <optgroup label="Drilling Operations" class="camOptgroup">
            <option class="camOption">Drill: Peck (Centered)</option>
            <option class="camOption">Drill: Continuous (Centered)</option>
          </optgroup>
          <optgroup label="Milling/Routing Operations" class="camOptgroup">
            <option class="camOption">CNC: Vector (no offset)</option>
            <option class="camOption">CNC: Vector (path inside)</option>
            <option class="camOption">CNC: Vector (path outside)</option>
            <option class="camOption">CNC: Pocket</option>
          </optgroup>
          <optgroup label="Laser Operations" class="camOptgroup">
            <option class="camOption">Laser: Vector (no path offset)</option>
            <option class="camOption">Laser: Vector (path inside)</option>
            <option class="camOption">Laser: Vector (path outside)</option>
            <option class="camOption">Laser: Vector (raster fill) (Beta)</option>
          <!--option class="camOption">CNC: V-Engrave</option-->
          </optgroup>
          <optgroup label="Plasma Operations" class="camOptgroup">
            <option class="camOption">Plasma: Vector (path outside)</option>
            <option class="camOption">Plasma: Vector (path inside)</option>
            <option class="camOption">Plasma: Vector (no path offset)</option>
          </optgroup>
          <optgroup label="Other" class="camOptgroup">
            <option class="camOption">Drag Knife: Cutout</option>
            <option class="camOption">Pen Plotter: (no offset)</option>
            <option class="camOption">Pen Plotter: (path inside)</option>
            <option class="camOption">Pen Plotter: (path outside)</option>
            <option class="camOption">Pen Plotter: (lines fill)</option>
          </optgroup>
        </select>${incToggle(tlprof, elem.id, false)}</div>
    </td>
  </tr>`;
  return str.replace(/\s{2}/g, '').trim();
};

function incToggle(tlprof, id , isVisible = true){
  var sty =(isVisible ? ``: `style="display:none"`);
  var tog =(isVisible ? `fa-toggle-off` : `fa-toggle-on`);
  return (tlprof ? `<span id="toolprf_TID_${id}" ${sty}" class="input-addon-label-right active-border"> <i class="fa ${tog}"></i></span>`: ``);
}

function metadata_render(i, items, tlprof=false){
  var str = '';

  items.forEach(function (a){
    elem = metadata[a]

    switch (elem.tmpl) {
        case 1: str += template_01(i, elem, tlprof); break;
        case 2: str += template_02(i, elem, tlprof); break;
        case 3: str += profTmpl_Options(i, elem, tlprof); break;
        case 4:
          str += `<div><input type="checkbox" data-role="switch" data-caption="Advanced Settings" id="advanced${i}" objectseq="${i}"></div>`
          str += `<div data-role="collapse" data-collapsed="true" data-toggle-element = "#advanced${i}" id = "collapsediv${i}">`
          break;
        case 5: str += profTmpl_CutType(i, elem, tlprof); break;
        default:
    }
  });
  return str;
};

function metadata_ApplyValues(i, items, userData){
  items.forEach( function (a){
    var elem = metadata[a]
    $(`#${elem.id}${i}`).val[userData[a]];
  });
}

function typeofOperation(newval, objectseq) {
  if (newval == "... Select Operation ...") {
    noMode(objectseq);
  } else if (newval == "Laser: Vector (no path offset)") {
    laserMode(objectseq);
  } else if (newval == "Laser: Vector (path inside)") {
    laserInsideMode(objectseq);
  } else if (newval == "Laser: Vector (path outside)") {
    laserOutsideMode(objectseq);
  } else if (newval == "Laser: Vector (raster fill) (Beta)") {
    laserRasterMode(objectseq);
  } else if (newval == "Drill: Peck (Centered)") {
    drillPeckMode(objectseq);
  } else if (newval == "Drill: Continuous (Centered)") {
    drillMode(objectseq);
  } else if (newval == "CNC: Vector (no offset)") {
    cncNoOffsetMode(objectseq);
  } else if (newval == "CNC: Vector (path outside)") {
    cncOutsideMode(objectseq);
  } else if (newval == "CNC: Vector (path inside)") {
    cncInsideMode(objectseq);
  } else if (newval == "CNC: Pocket") {
    cncPocketMode(objectseq);
  } else if (newval == "CNC: V-Engrave") {
    cncVEngMode(objectseq);
  } else if (["Plasma: Vector (path outside)",
              "Plasma: Vector (path inside)",
              "Plasma: Vector (no path offset)"].includes(newval)) {
    plasmaMode(objectseq);
  } else if (newval == "Drag Knife: Cutout") {
    dragKnifeMode(objectseq);
  } else if (["Pen Plotter: (no offset)",
            "Pen Plotter: (path inside)",
            "Pen Plotter: (path outside)"].includes(newval) ){
    plotterMode(objectseq);
  } else if (newval == "Pen Plotter: (lines fill)") {
    penRasterMode(objectseq);
  }
  else{
    console.log("No Operation was found...... should not trigger fix it...")
  }

  updateCamUserData(objectseq);

}

function initAdvancedCAM() {
  $('#statusBody2').on('keyup change', 'input, select', function() {
    // console.log('Action')
    var inputVal = $(this).val();
    var newval = inputVal
    var id = $(this).attr('id');
    // console.log(id)
    var objectseq = $(this).attr('objectseq');
    // console.log('Value for ' +id+ ' changed to ' +newval+ ' for object ' +objectseq );
    if (id.indexOf('tzstep') == 0) {
      var numPass = Math.floor((parseFloat($('#tzdepth' + objectseq).val()) / parseFloat(newval)))

      if ((parseFloat($('#tzdepth' + objectseq).val()) / parseFloat(newval)) - Math.floor(parseFloat($('#tzdepth' + objectseq).val()) / parseFloat(newval)) != 0) {
        var finalPass = parseFloat($('#tzdepth' + objectseq).val()) - (newval * numPass);
        $('#svgZDepth').text(numPass + ' x ' + newval + 'mm + 1 x ' + finalPass + 'mm');
      } else {
        $('#svgZDepth').text(numPass + ' x ' + newval + 'mm');
      }
    } else if (id.indexOf('tzdepth') == 0) {
      $('#svgZFinal').text(newval + 'mm');
      var numPass = Math.floor((parseFloat(newval) / parseFloat($('#tzstep' + objectseq).val())))
      if ((parseFloat(newval) / parseFloat($('#tzstep' + objectseq).val())) - Math.floor(parseFloat(newval) / parseFloat($('#tzstep' + objectseq).val())) != 0) {
        var finalPass = parseFloat(newval) - ($('#tzstep' + objectseq).val() * numPass);
        $('#svgZDepth').text(numPass + ' x ' + $('#tzstep' + objectseq).val() + 'mm + 1 x ' + finalPass + 'mm');
      } else {
        $('#svgZDepth').text(numPass + ' x ' + $('#tzstep' + objectseq).val() + 'mm');
      }
    } else if (id.indexOf('tspeed') == 0) {
    } else if (id.indexOf('tplungespeed') == 0) {
    } else if (id.indexOf('ttooldia') == 0) {
      $('#svgToolDia').text(newval + 'mm');
    } else if (id.indexOf('tstepover') == 0) {
      $('#svgStepover').text(newval + '%');
    } else if (id.indexOf('tclearanceHeight') == 0) {
      $('#svgZClear-8').text(newval + 'mm');
    } else if (id.indexOf('tstartHeight') == 0) {
      $('#svgZStart').text(newval + 'mm');
    } else if (id.indexOf('tPasses') == 0) {
      // $('#svgZStart').text(newval + 'mm');
    } else if (id.indexOf('tdragoffset') == 0) {
      $('#dragKnifeRadius').text(newval + 'mm');
    } else if (id.indexOf('tspotsize') == 0) {
      $('#svgToolDia-4').text(newval + 'mm');
    } else if (id.indexOf('tfillAngle') == 0) {
      $('#svgToolDia-4').text(newval + 'mm');
    } else if (id.indexOf('tplasmakerf') == 0) {
      $('#svgPlasmaKerf').text(newval + 'mm');
    } else if (id.indexOf('tplasmazheight') == 0) {
      $('#svgPlasmaZHeight').text(newval + 'mm');
    } else if (id.indexOf('tplasmapierceheight') == 0) {
      $('#svgPlasmaPierceHeight').text(newval + 'mm');
    } else if (id.indexOf('tplasmapiercedelay') == 0) {
      $('#svgPlasmaPierceDelay').text(newval + 's');
    } else if (id.indexOf('tplasmaleadin') == 0) {
      $('#svgPlasmaLeadIn').text(newval + 'mm');
    } else if (id.indexOf('tplasmaihs') == 0) {
      $('#svgPlasmaIHS').text(newval);
    } else if (id.indexOf('tdirection') == 0) {
      // $('#svgPlasmaIHS').text(newval);
    } else if (id.indexOf('tunion') == 0) {
      // $('#svgPlasmaIHS').text(newval);
    } else if (id.indexOf('tabdepth') == 0) {
      $('#svgtabdepth').text(newval);
      // console.log("tabdepth")
    } else if (id.indexOf('tabWidth') == 0) {
      $('#svgtawidth').text(newval);
      // console.log("tabWidth")
    } else if (id.indexOf('tabSpace') == 0) {
      $('#svgtabspace').text(newval);
      // console.log("tabSpace")
    } else if (id.indexOf('tOpName') == 0) {
      $('#svgOpName').text(newval);
    } else if (id.indexOf('tRampPlunge') == 0) {
      $('#svgOpName').text(newval);
    } else if (id.indexOf('advanced') == 0) {
      // $('#svgUnion').text(newval);
    } else if (id.indexOf('tpwr') == 0) {
      // $('#svgUnion').text(newval);
    } else if (id.indexOf('tpendown') == 0) {
      // $('#svgUnion').text(newval);
    } else if (id.indexOf('tpenup') == 0) {
      // $('#svgUnion').text(newval);
    }

    updateCamUserData(objectseq);

  });

  $('#statusBody2').on('keyup change', 'select', function() {
    var newval = $(this).val();
    var id = $(this).attr('id');
    var objectseq = $(this).attr('objectseq');
    // console.log('Value for ' +id+ ' changed to ' +newval+ ' for object ' +objectseq );
    if (id.indexOf('toperation') == 0) {
      typeofOperation(newval, objectseq)
    };

  });
};

function updateCamUserData(i) {
  metadataRanked.forEach(function (a){
    try {
      var elem = metadata[a]
      var val = $(`#${elem.id}${i}`).val();

      switch (a) {
        case 'tOpName':
          toolpathsInScene[i].name = val;
          break;
        case 'advanced':
          toolpathsInScene[i].userData.advanced = $(`#${elem.id}${i}`).is(":checked");
          break;
        default:
          toolpathsInScene[i].userData[a] = val;
      }
    }
    catch(error){ console.log(error); }
  });

  $('#statusTitle').html('Configure Toolpath: ' + toolpathsInScene[i].userData.camOperation);

  // store last used values in localStorage
  localStorage.setItem('lastCamOperation', JSON.stringify(toolpathsInScene[i].userData, inflatedReplacer));
};

function inflatedReplacer(key, value) {
  if (key == "inflated") return undefined;
  else if (key == "pretty") return undefined;
  else return value;
}


function setupJob(i) {

  // $('#statusmodal').modal('show');
  Metro.dialog.open('#statusmodal')
  $('#statusTitle').empty();
  $('#statusTitle').html('Configure Toolpath: ');
  $('#statusBody').empty();
  $('#statusBody2').empty();
  $('#statusFooter').empty();

  // $('#statusBody').html('' );
  if(true === true){
    var template2 = `
      Configure the toolpath parameters:
      <hr>
      <div id="toolpathWarnings"></div>
      <table class="table striped compact">

        <tr>
          <td>Name:</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="far fa-edit fa-fw"></i></span>
              <input data-role="input" autofocus type="text" class="cam-form-field cam-form-field-right active-border" value="${toolpathsInScene[i].name}" id="tOpName${i}"  objectseq="${i}" min="0" style="text-align: center;">
            </div>
          </td>
        </tr>`;

    template2 += metadata_render(i, metadata_Std);
    template2 += `</table>`;
    template2 += `<div><input type="checkbox" data-role="switch" data-caption="Advanced Settings" id="advanced${i}" objectseq="${i}" ></div>`
    template2 += `<div data-role="collapse" data-collapsed="true" data-toggle-element="#advanced${i}" id="collapsediv${i}">`
    template2 += `<table class="table striped compact">`
    template2 += metadata_render(i, metadata_Adv);
    template2 += `</table>`
    template2 += `</div>`;

    var footertemplate =
      `<table class="table compact">
        <tr>
          <td>
            <button class="button secondary" style="width: 200px;" id="toolprf_ID_StoreAsProfile" onclick="toolprf_action_StoreAsProfile()">Store As Profile</button>
          </td>
          <td id="toolprf_ID_ApplyProfile">
            <div  class="input-addon">
              <button class="button secondary dropdown-toggle" style="width: 200px;" id="toolprf_ButApplyProfile" onclick="toolprf_action_ApplyProfile()">Apply A Profile</button>
              <ul class="d-menu context drop-shadow" data-role="dropdown" data-duration="100" id="appToolProfilemenu"
                data-toggle-element="#toolprf_ButApplyProfile" data-role="dropdown" style="width: max-content; display: block;">
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" id="previewToolpathBtn" style="width: 200px;" class="button success" onclick="toolpathPreview(${i}); fillTree();">Apply and Preview Toolpath </button>
          </td>
          <td>
            <button class="button js-dialog-close" style="width: 200px;">Close</button>
          </td>
        </tr>
      </table>`
  } else {
    var template2 = `
      Configure the toolpath parameters:
      <hr>
      <div id="toolpathWarnings"></div>
      <table class="table striped compact">
        <tr>
          <td>Name:</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="far fa-edit fa-fw"></i></span>
              <input data-role="input" autofocus type="text" class="cam-form-field cam-form-field-right active-border" value="${toolpathsInScene[i].name}" id="tOpName${i}"  objectseq="${i}" min="0" style="text-align: center;">
            </div>
          </td>
        </tr>
        <tr>
          <td>Type of cut: </td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fa fa-wrench fa-fw" aria-hidden="true"></i></span>
              <select class="cam-form-field cam-form-field-right active-border camOperationSelect" id="toperation${i}" objectseq="${i}" style="width: 350px; border-left: solid 1px #ccc; padding: 0px; padding-left: 10px;">
                <option>... Select Operation ...</option>
                <optgroup label="Drilling Operations" class="camOptgroup">
                  <option class="camOption">Drill: Peck (Centered)</option>
                  <option class="camOption">Drill: Continuous (Centered)</option>
                </optgroup>
                <optgroup label="Milling/Routing Operations" class="camOptgroup">
                  <option class="camOption">CNC: Vector (no offset)</option>
                  <option class="camOption">CNC: Vector (path inside)</option>
                  <option class="camOption">CNC: Vector (path outside)</option>
                  <option class="camOption">CNC: Pocket</option>
                </optgroup>
                <optgroup label="Laser Operations" class="camOptgroup">
                  <option class="camOption">Laser: Vector (no path offset)</option>
                  <option class="camOption">Laser: Vector (path inside)</option>
                  <option class="camOption">Laser: Vector (path outside)</option>
                  <option class="camOption">Laser: Vector (raster fill) (Beta)</option>
                <!--option class="camOption">CNC: V-Engrave</option-->
                </optgroup>
                <optgroup label="Plasma Operations" class="camOptgroup">
                  <option class="camOption">Plasma: Vector (path outside)</option>
                  <option class="camOption">Plasma: Vector (path inside)</option>
                  <option class="camOption">Plasma: Vector (no path offset)</option>
                </optgroup>
                <optgroup label="Other" class="camOptgroup">
                  <option class="camOption">Drag Knife: Cutout</option>
                  <option class="camOption">Pen Plotter: (no offset)</option>
                  <option class="camOption">Pen Plotter: (path inside)</option>
                  <option class="camOption">Pen Plotter: (path outside)</option>
                  <option class="camOption">Pen Plotter: (lines fill)</option>
                </optgroup>
              </select>
            </div>
          </td>
        </tr>
      </table>
      <table class="table striped compact">
        <tr class="inputcnc inputpocket inputtooldia inputdrill inputplotter">
          <td>Endmill / Pen Diameter</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><img class="fa-fw" src="images/endmilldia.svg" width="16px" height="16px"></img></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="6.35" id="ttooldia${i}"  objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputpocket">
          <td>Stepover</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><img class="fa-fw" src="images/endmilldia.svg" width="16px" height="16px"></img></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="40" id="tstepover${i}"  objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">%</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc  inputpocket inputplasma inputdragknife inputlaser inputlaserraster inputdrill">
          <td>Z Safe Height</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-arrows-alt-v fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="10" id="tclearanceHeight${i}"  objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputdragknife">
          <td>Drag Knife: Center Offset</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><img class="fa-fw" src="images/dragoffset.svg" width="16px" height="16px"></img></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="1" id="tdragoffset${i}"  objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputlaser inputlaserraster">
          <td>Laser: Power</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-tachometer-alt fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="100" id="tpwr${i}" objectseq="${i}" min="1" max="100" step="any">
              <span class="input-addon-label-right active-border">%</span>
            </div>
          </td>
        </tr>
        <tr class="inputlaser inputlaserraster inputpenraster">
          <td>Laser: Kerf / Line Spacing</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><img class="fa-fw" src="images/kerf.svg" width="16px" height="16px"></img></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="0.1" id="tspotsize${i}" objectseq="${i}" min="0.1" max="5" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputlaserraster inputpenraster">
          <td>Fill: Angle</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><img class="fa-fw" src="images/protractor.svg" width="16px" height="16px"></img></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="0" id="tfillAngle${i}" objectseq="${i}" min="0.1" max="5" step="any">
              <span class="input-addon-label-right active-border">deg</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc inputpocket inputdrillpeck">
          <td>Cut Depth: per Pass</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-sort-amount-down fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" id="tzstep${i}" value="1" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc inputpocket inputdrill">
          <td>Cut Depth: Final</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-level-down-alt fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" id="tzdepth${i}" value="6" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc inputpocket inputdragknife inputlaser inputlaserraster inputplasma inputplotter inputpenraster">
          <td>Feedrate (X/Y)</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-exchange-alt fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="1000" id="tspeed${i}" objectseq="${i}" min="0" step="any" >
              <span class="input-addon-label-right active-border">mm/min</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc inputpocket inputdrill">
          <td>Feedrate: Plunge</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-exchange-alt fa-fw" data-fa-transform="rotate-90" ></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="300" id="tplungespeed${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm/min</span>
            </div>
          </td>
        </tr>
        <tr class="inputplasma">
          <td>Plasma: Kerf</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><img class="fa-fw" src="images/kerf.svg" width="16px" height="16px"></img></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="1.2" id="tplasmakerf${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputplasma">
          <td>Plasma: Pierce Height</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-meteor fa-fw" data-fa-transform="rotate--45"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="4" id="tplasmapierceheight${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputplasma">
          <td>Plasma: Pierce Delay</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="far fa-clock fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="1.5" id="tplasmapiercedelay${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">seconds</span>
            </div>
          </td>
        </tr>
        <tr class="inputplasma">
          <td>Plasma: Cut Height</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-arrows-alt-v fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="1.5" id="tplasmazheight${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputplasma">
          <td>Plasma: Lead-In Distance</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-drafting-compass fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="5" id="tplasmaleadin${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputplasma">
          <td>Plasma: Touch-Off Zero</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="far fa-arrow-alt-circle-down fa-fw"></i></span>
              <select class="cam-form-field cam-form-field-right active-border" id="tplasmaihs${i}" objectseq="${i}" style="width: 280px; border-left: solid 1px #ccc; padding: 0px; padding-left: 10px;">
                <option selected>No</option>
                <option>Yes</option>
              </select>
            </div>
          </td>
        </tr>
        <tr class="inputplotter inputpenraster">
          <td>Plotter: Pen Up</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="far fa-edit fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="255" id="tpenup${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">M3Sxxx</span>
            </div>
          </td>
        </tr>

        <tr class="inputplotter inputpenraster">
          <td>Plotter: Pen Down</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-edit fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="0" id="tpendown${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">M3Sxxx</span>
            </div>
          </td>
        </tr>

        </table>


      <div>
        <input type="checkbox" data-role="switch" data-caption="Advanced Settings" id="advanced${i}" objectseq="${i}" >
      </div>
      <div data-role="collapse" data-collapsed="true" data-toggle-element="#advanced${i}" id="collapsediv${i}">

      <table class="table striped compact">
        <tr class="inputlaser inputlaserraster">
          <td>Muliple passes:</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-sort-amount-down fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="1" id="tPasses${i}"  objectseq="${i}" min="1" step="any">
              <span class="input-addon-label-right active-border">x</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc inputpocket">
          <td>Cutting Direction:</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-compress fa-fw"></i></span>
              <select class="cam-form-field cam-form-field-right active-border" id="tdirection${i}" objectseq="${i}" style="width: 280px; border-left: solid 1px #ccc; padding: 0px; padding-left: 10px;">
                <option selected>Climb</option>
                <option>Conventional</option>
              </select>
            </div>
          </td>
        </tr>
        <tr class="inputplasma inputcnc inputpocket inputdragknife inputlaser inputlasernooffset">
          <td>Geometry: Merge</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-compress fa-fw"></i></span>
              <select class="cam-form-field cam-form-field-right active-border" id="tunion${i}" objectseq="${i}" style="width: 280px; border-left: solid 1px #ccc; padding: 0px; padding-left: 10px;">
                <option selected>No</option>
                <option>Yes</option>
              </select>
            </div>
          </td>
        </tr>
        <tr class="inputcnc inputpocket">
          <td>
            Plunge: Ramp In<br>
            <div class="text-small">[beta] Experimental!</div>
          </td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-ruler fa-fw"></i></span>
              <select class="cam-form-field cam-form-field-right active-border" id="tRampPlunge${i}" objectseq="${i}" style="width: 280px; border-left: solid 1px #ccc; padding: 0px; padding-left: 10px;">
                <option selected>No</option>
                <option>Yes</option>
              </select>
            </div>
          </td>
        </tr>
        <tr class="inputcnc inputpocket ">
          <td>Cut Depth: Start</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-indent fa-fw" data-fa-transform="rotate-90" ></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="0" id="tstartHeight${i}"  objectseq="${i}" min="1" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc">
          <td>Tabs: Height</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-text-height fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="0" id="tabdepth${i}" objectseq="${i}" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc">
          <td>Tabs: Width</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-text-width fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="6" id="tabWidth${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>
        <tr class="inputcnc">
          <td>Tabs: Spacing</td>
          <td>
            <div class="input-addon">
              <span class="input-addon-label-left active-border"><i class="fas fa-ruler-horizontal fa-fw"></i></span>
              <input data-role="input" data-clear-button="false" type="number" class="cam-form-field active-border" value="50" id="tabSpace${i}" objectseq="${i}" min="0" step="any">
              <span class="input-addon-label-right active-border">mm</span>
            </div>
          </td>
        </tr>

      </table>
    </div>`

    var footertemplate =
    `<button type="button" id="previewToolpathBtn" class="button success" onclick="toolpathPreview(${i}); fillTree();">Apply and Preview Toolpath </button>
     <button class="button js-dialog-close">Close</button>`
  }

  $('#statusBody2').html(template2);
  $('#statusFooter').html(footertemplate);
  // drf_download(drf_format_html(template2), 'Test', 'txt')

  noMode(); // Default to NOOP
  $("#tOpName" + i).focus()
  Metro.init();

  var closedVectors = 0
  var openVectors = 0
  for (j = 0; j < toolpathsInScene[i].children.length; j++) {
    if (toolpathsInScene[i].children[j].userData.closed == undefined) { // this is for imports of old Workspaces before the closed logic.
      closedVectors++
    } else { // New documents
      if (toolpathsInScene[i].children[j].userData.closed) {
        closedVectors++
      } else {
        openVectors++
      }
    }
  }

  console.log("This operation contains " + openVectors + " Open Vectors, and " + closedVectors + " Closed Vectors")
  if (openVectors > 0) {
    var template3 = '<div class="remark"><span class="text-small">This toolpath contains ' + openVectors + ' open vector(s), and ' + closedVectors + ' closed vector(s)</span>'
    template3 += '<br><span class="text-small fg-red">NB: You cannot use Offset operations on Open Vectors, you can try to use "No Offset" operations, or repair the file first</span>'
    template3 += '</div>'
    $('#toolpathWarnings').html(template3)
  }
  if (toolpathsInScene[i].userData.camOperation) {
    var CamIDs = ['camPasses', 'camToolDia', 'camStepover', 'camZClearance', 'camZStart', 'camDragOffset', 'camSpotSize', 'camFillAngle', 'camLaserPower',
                  'camZStep', 'camZDepth', 'camFeedrate', 'camPlungerate', 'camPlasmaKerf', 'camPlasmaZHeight', 'camPlasmaPierceHeight', 'camPlasmaPierceDelay',
                  'camPlasmaLeadinDist', 'camTabDepth', 'camTabWidth', 'camTabSpace', 'camPenUp', 'camPenDown'];

    $('#toperation' + i).val(toolpathsInScene[i].userData.camOperation).prop('selected', true)

    metadata_ApplyValues(i, CamIDs , toolpathsInScene[i].userData)

    if (toolpathsInScene[i].userData.tRampPlunge) {
      $('#tRampPlunge' + i).val(toolpathsInScene[i].userData.tRampPlunge).prop('selected', true);
    } else {
      $('#tRampPlunge' + i).val("No").prop('selected', true);
    }
    $('#tplasmaihs' + i).val(toolpathsInScene[i].userData.camPlasmaIHS).prop('selected', true);
    $('#tunion' + i).val(toolpathsInScene[i].userData.camUnion).prop('selected', true);
    $('#tdirection' + i).val(toolpathsInScene[i].userData.camDirection).prop('selected', true);
    $('#tOpName' + i).val(toolpathsInScene[i].name);
    $('#statusTitle').html('Configure Toolpath: ' + toolpathsInScene[i].userData.camOperation);
    $('#advanced' + i).prop('checked', toolpathsInScene[i].userData.advanced);
    if (toolpathsInScene[i].userData.advanced) {
      setTimeout(function() {
        $(`#advanced${i}`).prop('checked', true);
        $(`#collapsediv${i}`).data("collapse")['expand']()
      }, 200);
    } else {
      setTimeout(function() {
        $('#advanced' + i).prop('checked', false);
        $('#collapsediv' + i).data("collapse")['collapse']()
      }, 200);
    }
    typeofOperation(toolpathsInScene[i].userData.camOperation, i);
  } else {
    // if we don't already have an Operation, perhaps we can pull from last-used values to make it easier
    var lastused = JSON.parse(localStorage.getItem('lastCamOperation'));
    if (lastused) {
      let Lastused_Std = ['camToolDia', 'camStepover', 'camZClearance', 'camDragOffset', 'camLaserPower', 'camSpotSize',
                          'camFillAngle', 'camZStep', 'camZDepth', 'camFeedrate', 'camPlungerate', 'camPlasmaKerf',
                          'camPlasmaPierceHeight', 'camPlasmaPierceDelay', 'camPlasmaZHeight', 'camPlasmaLeadinDist',
                          'camPlasmaIHS', 'camPenUp', 'camPenDown', 'camDirection','camPasses', 'camZStart'];

      metadata_ApplyValues(i, Lastused_Std , lastused)

    }
  };
}

function noMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputlaser').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputlaserraster').hide();
}

function laserMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $(".inputlasernooffset").hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputlaser').show();
};

function laserInsideMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputlaser').show();
};

function laserOutsideMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputlaser').show();
};

function laserRasterMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputlaserraster').show();
};

function drillMode(i) {
  $('.inputlaser').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputcnc').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputdrill').show();
}

function drillPeckMode(i) {
  $('.inputlaser').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputcnc').hide();
  $('.inputdrill').show();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputdrillpeck').show();

}

function cncInsideMode(i) {
  $('.inputlaser').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputcnc').show();
};

function cncOutsideMode(i) {
  $('.inputlaser').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputcnc').show();
};

function cncNoOffsetMode(i) {
  $('.inputlaser').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputtooldia').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputcnc').show();

}

function cncPocketMode(i) {
  $('.inputlaser').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputcnc').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputpocket').show();
  // force open Advanced and force Union by default
  setTimeout(function() {
    $('#advanced' + i).prop('checked', true);
    $('#collapsediv' + i).data("collapse")['expand']()
  }, 200);
  if (!toolpathsInScene[i].userData.camOperation) { // only force if not set already (ie suggested default)
    $('#tunion' + i).val("Yes").prop('selected', true);
  }
};

function plasmaMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputlaser').hide();
  $('.inputdragknife').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputplasma').show();
};


function dragKnifeMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputlaser').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputplotter').hide();
  $('.inputpenraster').hide();
  $('.inputdragknife').show();
};

function plotterMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputlaser').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputlaserraster').hide();
  $('.inputdragknife').hide();
  $('.inputpenraster').hide();
  $('.inputplotter').show();
};

function penRasterMode(i) {
  $('.inputcnc').hide();
  $('.inputpocket').hide();
  $('.inputdragknife').hide();
  $('.inputplasma').hide();
  $('.inputdrill').hide();
  $('.inputdrillpeck').hide();
  $('.inputplotter').hide();
  $('.inputlaserraster').hide();
  $('.inputpenraster').show();
};