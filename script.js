moveTowardsAngle = function (coordinates, angle, distance = 20) {
    // Earth’s radius as a sphere
    const R = 6378160
    // Get the angle to 0-360
    angle = ((angle + 360) % 360)
    // Calculate the movement amount in meters
    var xOffset = distance * Math.sin(Math.PI * 2 * angle / 360);
    var yOffset = distance * Math.cos(Math.PI * 2 * angle / 360);
    // Calculate coordinate offsets
    dLon = xOffset / (R * Math.cos(Math.PI * coordinates[1] / 180));
    dLat = yOffset / R;
    // Calculate new coordinates
    newX = coordinates[0] + dLon * 180 / Math.PI;
    newY = coordinates[1] + dLat * 180 / Math.PI;
    newCoordinates = [newX,newY];
    // Return new coordinates
    return newCoordinates;
}

