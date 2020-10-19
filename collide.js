function collided(lbullet,lwall){
    bulletRightEdge = lbullet.x+lbullet.width;
    wallEdge = lwall.x;

    if(bulletRightEdge>=wallEdge){
        return true;
    }
    return false;
}
