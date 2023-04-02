function addCircle(radius, segments, degree, incOrg) {
  if (segments < 1) {
    segments = 32;
  }

  degree = parseFloat(degree)

  console.log("Adding circle: " + radius)
  var existingInternalCad = scene.getObjectByName("Internal CAD", true);
  if (!existingInternalCad) {
    var fileObject = new THREE.Group();
  } else {
    fileObject = existingInternalCad;
  }

  var geometry = new THREE.CircleGeometry(radius, segments, 0 , degrees_to_radians(degree));

  if((degree == 360) || !incOrg) {
    geometry.vertices.shift();
  }

  var endx = parseFloat(geometry.vertices[0].x)
  var endy = parseFloat(geometry.vertices[0].y)
  var endz = parseFloat(geometry.vertices[0].z)
  geometry.vertices.push(
    new THREE.Vector3(endx, endy, endz),
  );

  var material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });
  var geometry2 = new THREE.Geometry();

  for (i = 0; i < geometry.vertices.length; i++) {
    var x = parseFloat(geometry.vertices[i].x)
    var y = parseFloat(geometry.vertices[i].y)
    var z = parseFloat(geometry.vertices[i].z)
    geometry2.vertices.push(
      new THREE.Vector3(x, y, z),
    );
  }

  // geometry2.translate(radius, radius, 0)
  var circle = new THREE.Line(geometry2, material);

  circle.name = "circle"
  // circle.geometry.verticesNeedUpdate = true
  // circle.translateX(radius);
  // circle.translateY(radius);


  fileObject.add(circle);
  fileObject.name = "Internal CAD" + Math.random()
  if (!existingInternalCad) {
    objectsInScene.push(fileObject)
  }
  setTimeout(function() {
    fillTree();
    changePositionToGeoTranslate();
    resetView();
  }, 250);
}

function addRect(width, height) {

  var existingInternalCad = scene.getObjectByName("Internal CAD", true);

  if (!existingInternalCad) {
    var fileObject = new THREE.Group();

  } else {
    fileObject = existingInternalCad;
  }

  var rectgeom = new THREE.Geometry();
  rectgeom.vertices.push(new THREE.Vector3(0, 0, 0));
  rectgeom.vertices.push(new THREE.Vector3(0, height, 0));
  rectgeom.vertices.push(new THREE.Vector3(width, height, 0));
  rectgeom.vertices.push(new THREE.Vector3(width, 0, 0));
  rectgeom.vertices.push(new THREE.Vector3(0, 0, 0));
  // rectgeom.faces.push(new THREE.Face3(0, 1, 2));
  // rectgeom.faces.push(new THREE.Face3(0, 3, 2));
  var material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });

  var rectangle = new THREE.Line(rectgeom, material);

  rectangle.name = "rectangle";

  
  fileObject.add(rectangle);

  fileObject.name = "Internal CAD" + Math.random()
  if (!existingInternalCad) {
    objectsInScene.push(fileObject)
  }

  setTimeout(function() {
    fillTree();
    changePositionToGeoTranslate();
    resetView();
  }, 250);
}

function degrees_to_radians(degrees){
  return degrees * (Math.PI/180);
};

function addRing(outRad, inrRad, segments, degrees) {

  var existingInternalCad = scene.getObjectByName("Internal CAD", true);

  if (!existingInternalCad) {
    var fileObject = new THREE.Group();
  } else {
    fileObject = existingInternalCad;
  }

  if (degrees < 360){
    var geometry = new THREE.RingGeometry(outRad, inrRad, segments, 1 , 0 , degrees_to_radians(degrees));

    geometry.vertices = geometry.vertices.slice(0 , geometry.vertices.length *0.5).concat(
                        geometry.vertices.slice((geometry.vertices.length *0.5 ), geometry.vertices.length).reverse());
    geometry.faces = [];

    var endx = parseFloat(geometry.vertices[0].x)
    var endy = parseFloat(geometry.vertices[0].y)
    var endz = parseFloat(geometry.vertices[0].z)

    geometry.vertices.push(
      new THREE.Vector3(endx, endy, endz),
    );

    var material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide
    });

    var ring = new THREE.Line(geometry, material);
    ring.name = "ring"

    fileObject.add(ring);
    

    fileObject.name = "Internal CAD" + Math.random()
    if (!existingInternalCad) {
      objectsInScene.push(fileObject)
    }
  } else {
    addCircle(outRad, segments);
    addCircle(inrRad, segments);
  }

  setTimeout(function() {
    fillTree();
    changePositionToGeoTranslate();
    resetView();
  }, 250);

};

function addSlot(width, length, segments) {
  var radius = width * 0.5;

  var existingInternalCad = scene.getObjectByName("Internal CAD", true);
  if (!existingInternalCad) {
    var fileObject = new THREE.Group();
  } else {
    fileObject = existingInternalCad;
  }

  var geometry = new THREE.CircleGeometry(radius, segments, degrees_to_radians(90.0), Math.PI);
  geometry.translate(length * -0.5 , 0 , 0)

  var geometry2 = new THREE.CircleGeometry(radius, segments, degrees_to_radians(270.0), Math.PI);
  geometry2.vertices.shift()
  geometry2.translate(length * 0.5 , 0 , 0)

  geometry.vertices = geometry.vertices.concat(geometry2.vertices)

  geometry.vertices.shift();

  var endx = parseFloat(geometry.vertices[0].x)
  var endy = parseFloat(geometry.vertices[0].y)
  var endz = parseFloat(geometry.vertices[0].z)

  geometry.vertices.push(
    new THREE.Vector3(endx, endy, endz),
  );
  var material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });

  var geometry2 = new THREE.Geometry();

  for (i = 0; i < geometry.vertices.length; i++) {
    var x = parseFloat(geometry.vertices[i].x)
    var y = parseFloat(geometry.vertices[i].y)
    var z = parseFloat(geometry.vertices[i].z)
    geometry2.vertices.push(
      new THREE.Vector3(x, y, z),
    );
  }


  // geometry2.translate(radius, radius, 0)
  var slot = new THREE.Line(geometry2, material);

  slot.name = "Slot"


  fileObject.add(slot);
  fileObject.name = "Internal CAD" + Math.random()
  if (!existingInternalCad) {
    objectsInScene.push(fileObject)
  }
  setTimeout(function() {
    fillTree();
    changePositionToGeoTranslate();
    resetView();
  }, 250);
}

function addEllipse(xRad, yRad, startAng, endAng, segments, incOrg) {
  //https://threejs.org/docs/#api/en/extras/curves/EllipseCurve
  if (endAng > 360) { endAng = 360}


  var existingInternalCad = scene.getObjectByName("Internal CAD", true);

  if (!existingInternalCad) {
    var fileObject = new THREE.Group();
  } else {
    fileObject = existingInternalCad;
  }

  var ellipse = new THREE.EllipseCurve(0, 0, xRad, yRad, degrees_to_radians(startAng), degrees_to_radians(endAng) ,false, 0 );
  var points = ellipse.getPoints( segments );

  var geometry = new THREE.Geometry().setFromPoints( points );

  geometry.faces = [];

  if ((endAng < 360 ||startAng > 0) && incOrg) {
    geometry.vertices.push(
      new THREE.Vector3(0.0, 0.0, 0.0),
    );
  }

  var endx = parseFloat(geometry.vertices[0].x)
  var endy = parseFloat(geometry.vertices[0].y)
  var endz = parseFloat(geometry.vertices[0].z)

  geometry.vertices.push(
    new THREE.Vector3(endx, endy, endz),
  );

  var material = new THREE.MeshBasicMaterial({color: 0xffff00,side: THREE.DoubleSide});
  var ellipse = new THREE.Line(geometry, material);

  ellipse.name = "ellipse"
  fileObject.add(ellipse);


  fileObject.name = "Internal CAD" + Math.random()

  if (!existingInternalCad) {
    objectsInScene.push(fileObject)
  }

  setTimeout(function() {
    fillTree();
    changePositionToGeoTranslate();
    resetView();
  }, 250);
}

function addStar(points, outRad, inrRad, degree, incOrg) {

  var existingInternalCad = scene.getObjectByName("Internal CAD", true);

  if (!existingInternalCad) {
    var fileObject = new THREE.Group();
  } else {
    fileObject = existingInternalCad;
  }

  var geometry = new THREE.Geometry();

  var inc = degrees_to_radians(degree/points)

  for (i = 0; i < points; i++){
    var xloc = Math.round((outRad * Math.cos(inc * i )) * 1000) / 1000
    var yloc = Math.round((outRad * Math.sin(inc * i )) * 1000) / 1000
    geometry.vertices.push(new THREE.Vector3(xloc, yloc , 0));

    var xloc = Math.round((inrRad * Math.cos(inc * i + (inc * 0.5))) * 1000) / 1000
    var yloc = Math.round((inrRad * Math.sin(inc * i + (inc * 0.5))) * 1000) / 1000
    geometry.vertices.push(new THREE.Vector3(xloc, yloc , 0));
  }

  if (degree < 360) {
    var xloc = Math.round((outRad * Math.cos(inc * i )) * 1000) / 1000
    var yloc = Math.round((outRad * Math.sin(inc * i )) * 1000) / 1000
    geometry.vertices.push(new THREE.Vector3(xloc, yloc , 0));

    if ((degree != 180) && incOrg) {
      geometry.vertices.push(
        new THREE.Vector3(0, 0, 0)
      );
    }
  }

  var endx = parseFloat(geometry.vertices[0].x)
  var endy = parseFloat(geometry.vertices[0].y)
  var endz = parseFloat(geometry.vertices[0].z)

  geometry.vertices.push(
    new THREE.Vector3(endx, endy, endz),
  );

  var material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });

  var star = new THREE.Line(geometry, material);
  star.name = "star"
  


  fileObject.add(star);
  fileObject.name = "Internal CAD" + Math.random()
  if (!existingInternalCad) {
    objectsInScene.push(fileObject)
  }
  setTimeout(function() {
    fillTree();
    changePositionToGeoTranslate();
    resetView();
  }, 250);
}

$(document).ready(function() {
  var modal = `

  <div class="dialog dark" data-overlay-click-close="true" data-role="dialog" id="addShapeCircle" data-to-top="true">
    <div class="dialog-title" id="statusTitle">Add shape: Circle</div>
    <div class="dialog-content">
    <form>
      <input type="number" class="form-control" id="circleRadius" value="10" data-role="input" data-append="mm" data-prepend="Radius" step="any">
      <br>
      <input type="number" class="form-control" id="circleSegments" value="32" data-role="input"  data-prepend="Segments" step="any">
      <small>Segments determines the smoothness of the circle, as circles are processed as Polylines</small>
      <br>
      <input type="number" class="form-control" id="circleDeg" value="360" data-role="input" data-append="mm" data-prepend="Degrees" step="any" data-min-value="0",data-max-value="360">
      <br>
      <input type="checkbox"  id="circleIncOrg" data-role="checkbox" data-caption="Open Profiles Include Origin." data-caption-position="left">
    </form>
    </div>
    <div class="dialog-actions" id="statusFooter">
      <button class="button js-dialog-close">Cancel</button>
      <button type="button" class="button js-dialog-close success" id="CreateCircle">Create</button>
    </div>
  </div>

  <div class="dialog dark" data-overlay-click-close="true" data-role="dialog" id="addShapeRect" data-to-top="true">
		<div class="dialog-title" id="statusTitle">Add shape: Rectangle</div>
		<div class="dialog-content">
    <form>
      <input type="number" class="form-control" id="rectX" value="100" data-role="input" data-append="mm" data-prepend="Width" step="any">
      <br>
      <input type="number" class="form-control" id="rectY" value="50" data-role="input" data-append="mm" data-prepend="Height" step="any">
    </form>
		</div>
		<div class="dialog-actions" id="statusFooter">
			<button class="button js-dialog-close">Cancel</button>
      <button type="button" class="button js-dialog-close success" id="CreateRect">Create</button>
		</div>
	</div>

  <div class="dialog dark" data-overlay-click-close="true" data-role="dialog" id="addShapeRing" data-to-top="true">
		<div class="dialog-title" id="statusTitle">Add shape: Ring</div>
		<div class="dialog-content">
      <form>
        <input type="number" class="form-control" id="ringSeg" value="32" data-role="input" data-append="mm" data-prepend="Segments:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="ringORad" value="80" data-role="input" data-append="mm" data-prepend="Outer Rad:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="ringIRad" value="50" data-role="input" data-append="mm" data-prepend="Inner Rad:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="ringDeg" value="180" data-role="input" data-append="mm" data-prepend="Degrees:" step="any" data-min-value="0" data-max-value="360">
      </form>
		</div>
    <div class="dialog-actions" id="statusFooter">
			<button class="button js-dialog-close">Cancel</button>
      <button type="button" class="button js-dialog-close success" id="CreateRing">Create</button>
		</div>
	</div>

  <div class="dialog dark" data-overlay-click-close="true" data-role="dialog" id="addShapeSlot" data-to-top="true">
		<div class="dialog-title" id="statusTitle">Add shape: Slot</div>
		<div class="dialog-content">
      <form>
        <input type="number" class="form-control" id="SlotSeg" value="32" data-role="input" data-append="mm" data-prepend="Segments:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="SlotWdth" value="10" data-role="input" data-append="mm" data-prepend="Width:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="SlotLgth" value="50" data-role="input" data-append="mm" data-prepend="Length:" step="any" data-min-value="0">
      </form>
		</div>
    <div class="dialog-actions" id="statusFooter">
			<button class="button js-dialog-close">Cancel</button>
      <button type="button" class="button js-dialog-close success" id="CreateSlot">Create</button>
		</div>
	</div>

  <div class="dialog dark" data-overlay-click-close="true" data-role="dialog" id="addShapeEllipse" data-to-top="true">
		<div class="dialog-title" id="statusTitle">Add shape: Ellipse</div>
		<div class="dialog-content">
      <form>
        <input type="number" class="form-control" id="EllipsexRad" value="32" data-role="input" data-append="mm" data-prepend="X Rad:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="EllipseyRad" value="100" data-role="input" data-append="mm" data-prepend="Y Rad:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="EllipsestartAng" value="0" data-role="input" data-append="mm" data-prepend="Start Ang:" step="any" data-min-value="0", data-max-value="360">
        <br>
        <input type="number" class="form-control" id="EllipseendAng" value="360" data-role="input" data-append="mm" data-prepend="End Ang:" step="any" data-min-value="0", data-max-value="360">
        <br>
        <input type="number" class="form-control" id="EllipseSeg" value="50" data-role="input" data-append="mm" data-prepend="Segments:" step="any" data-min-value="3">
        <br>
        <input type="checkbox"  id="EllipseIncOrg" data-role="checkbox" data-caption="Open Profiles Include Origin." data-caption-position="left">
      </form>
		</div>
    <div class="dialog-actions" id="statusFooter">
			<button class="button js-dialog-close">Cancel</button>
      <button type="button" class="button js-dialog-close success" id="CreateEllipse">Create</button>
		</div>
	</div>


  <div class="dialog dark" data-overlay-click-close="true" data-role="dialog" id="addShapeStar" data-to-top="true">
		<div class="dialog-title" id="statusTitle">Add shape: Star</div>
		<div class="dialog-content">
      <form>
        <input type="number" class="form-control" id="starPnts" value="5" data-role="input" data-append="mm" data-prepend="Points:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="starORad" value="100" data-role="input" data-append="mm" data-prepend="Outer Rad:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="starIRad" value="50" data-role="input" data-append="mm" data-prepend="Inner Rad:" step="any" data-min-value="0">
        <br>
        <input type="number" class="form-control" id="starDeg" value="360" data-role="input" data-append="mm" data-prepend="Degree:" step="any" data-min-value="0" data-max-value="360">
        <br>
        <input type="checkbox"  id="starIncOrg" data-role="checkbox" data-caption="Open Profiles Include Origin." data-caption-position="left">
      </form>
		</div>
		<div class="dialog-actions" id="statusFooter">
			<button class="button js-dialog-close">Cancel</button>
      <button type="button" class="button js-dialog-close success" id="CreateStar">Create</button>
		</div>
	</div>
  `
  $("body").append(modal);

  $("#CreateCircle").on("click", function(event) {
    event.preventDefault();
    var radius = $("#circleRadius").val();
    var segments = $("#circleSegments").val();
    var degree = $("#circleDeg").val();
    var incOrg = $("#circleIncOrg").is(":checked");
    addCircle(radius, segments, degree, incOrg);
  });

  $("#CreateRect").on("click", function(event) {
    event.preventDefault();
    var width = $("#rectX").val();
    var height = $("#rectY").val();
    addRect(width, height);
  });

// ---------------------------------------------------------------------------------------------------
  $("#CreateRing").on("click", function(event) {
    event.preventDefault();
    var segments = parseInt($("#ringSeg").val());
    var outRad =  parseFloat($("#ringORad").val());
    var inrRad =  parseFloat($("#ringIRad").val());
    var degrees =  parseFloat($("#ringDeg").val());

    addRing(outRad, inrRad, segments, degrees);
  });

  $("#CreateSlot").on("click", function(event) {
    event.preventDefault();
    var segments = parseInt($("#SlotSeg").val());
    var width =  parseFloat($("#SlotWdth").val());
    var length =  parseFloat($("#SlotLgth").val());

    addSlot(width, length, segments);
  });

  $("#CreateEllipse").on("click", function(event) {
    event.preventDefault();
    var xRad = parseInt($("#EllipsexRad").val());
    var yRad =  parseFloat($("#EllipseyRad").val());
    var startAng =  parseFloat($("#EllipsestartAng").val());
    var endAng =  parseFloat($("#EllipseendAng").val());
    var segments =  parseFloat($("#EllipseSeg").val());
    var incOrg =  $("#EllipseIncOrg").is(":checked");

    addEllipse(xRad, yRad, startAng, endAng, segments, incOrg);
  });

  $("#CreateStar").on("click", function(event) {
    event.preventDefault();
    var points = $("#starPnts").val();
    var outRad = $("#starORad").val();
    var inrRad = $("#starIRad").val();
    var degree = $("#starDeg").val();
    var incOrg = $("#starIncOrg").is(":checked");
    addStar(points, outRad, inrRad, degree, incOrg);
  });
});