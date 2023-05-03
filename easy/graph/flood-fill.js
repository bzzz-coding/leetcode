/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.


m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n
*/

// image is represented by a nested array of length m, with each subarray has the same length n
/* 
[ 
  [x, x, x, x, x,],
  [x, x, x, y, x,],
  [x, x, x, x, x,],
]
*/
// image[sr][sc] is the target pixel y = image[1, 3];
// checking outer layers of y for color value, if pixel and pixel color is same of y, change it to new color
// 4 directions, right (sc + 1) < n, down (sr + 1) < m, left (sc - 1) >= 0, up (sr - 1) >=0

const floodFill = (image, sr, sc, color) => {
  let startingColor = image[sr][sc];
  if (startingColor === color) return image;
  let m = image.length;
  let n = image[0].length;
  let imageCopy = [...image];

  function depthFirstSearch(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== startingColor) {
      return;
    }
    imageCopy[i][j] = color;
    depthFirstSearch(i-1, j);
    depthFirstSearch(i+1, j);
    depthFirstSearch(i, j-1);
    depthFirstSearch(i, j+1);
  }

  depthFirstSearch(sr, sc);
  return imageCopy;
};


function floodFill2(image, sr, sc, newColor) {
  const stack = [[sr, sc]];
  const oldColor = image[sr][sc];
  
  if (oldColor === newColor) {
      return image;
  }
  
  while (stack.length) {
      const [row, col] = stack.pop();
      image[row][col] = newColor;
      
      // Check top neighbor
      if (row > 0 && image[row - 1][col] === oldColor) {
          stack.push([row - 1, col]);
      }
      
      // Check bottom neighbor
      if (row < image.length - 1 && image[row + 1][col] === oldColor) {
          stack.push([row + 1, col]);
      }
      
      // Check left neighbor
      if (col > 0 && image[row][col - 1] === oldColor) {
          stack.push([row, col - 1]);
      }
      
      // Check right neighbor
      if (col < image[0].length - 1 && image[row][col + 1] === oldColor) {
          stack.push([row, col + 1]);
      }
  }
  
  return image;
}


console.log(floodFill2([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));