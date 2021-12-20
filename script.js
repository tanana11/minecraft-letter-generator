const begin_x = document.getElementById('begin-x');
const begin_y = document.getElementById('begin-y');
const begin_z = document.getElementById('begin-z');
const height = document.getElementById('height');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('run').addEventListener('click', () => {
  canvas.width = height.value * input.value.length;
  canvas.height = height.value * 1.2;
  ctx.fillStyle="#FF0000";
  ctx.font = height.value + 'px Meiryo UI';
  ctx.fillText(input.value, 0, height.value);
  let mcFunction = "";
  let use_blocks = 0;
  for (let y = 0; y < canvas.height; y += 1){
    for (let x = 0; x < canvas.width; x += 1){
      const imgData = ctx.getImageData(x, y, 1, 1).data;
      if (imgData[0] != 0){
        mcFunction += "setblock "
                      + (begin_x.value - x)
                      + " "
                      + (begin_y.value - y)
                      + " "
                      + begin_z.value
                      + " minecraft:tnt\n"
        use_blocks += 1;
      }
    }
  }
  document.getElementById('use_blocks').innerHTML = "コマンド数: " + use_blocks;
  document.getElementById('command').value = mcFunction;
  let blob = new Blob([mcFunction], {type: 'text/plain'});
  document.getElementById('download').href = URL.createObjectURL(blob);
  console.log(use_blocks)
});
//完成! 2021/11/28
