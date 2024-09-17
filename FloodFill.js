/**
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const initialColor = image[sr][sc];
    if (initialColor === color) {
        return image;
    }
    function dfs(sr, sc) {
        if (sr < 0 || sr >= image.length ||
        sc < 0 || sc >= image[0].length || 
        image[sr][sc] !== initialColor) {
            return;
        }
        image[sr][sc] = color;
        dfs(sr-1, sc);
        dfs(sr+1, sc);
        dfs(sr, sc-1);
        dfs(sr, sc+1);
    }
    dfs(sr, sc);
    return image;
};

// Example Usage:
const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ];
  const sr = 1;
  const sc = 1;
  const newColor = 2;

  console.log(image.length)
  console.log(image[0].length)
  console.log(floodFill(image, sr, sc, newColor));