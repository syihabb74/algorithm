# 📌 Insertion Sort - How it Works

The **Insertion Sort** algorithm works by arranging the array elements one by one, much like how one would manually arrange cards in a specific order.

Here are the steps on how it works:

---

## ⚙️ Working Steps

1. **Start from the second element** (index 1), because the first element is considered to be in the correct position.

2. **Take the current element** and compare it with the previous element in the array.

3. If the previous element is larger than the current element:
   - Swap the positions of the two elements.
   - Continue comparing to the left (to the smaller index) until there are no more elements that are larger.

4. Repeat this process for all elements until the end of the array.

5. Once all elements have been checked, the array will be sorted ascending.

---

## 📌 Process Example with Input `[5, 4, 3, 1, 2]`

- **Step 1**: Compare 4 with 5 → swap → `[4, 5, 3, 1, 2]`
- **Step 2**: Compare 3 with 5 → swap 
 Compare 3 with 4 → swap → `[3, 4, 5, 1, 2]`
- **Step 3**: Compare 1 with 5 → swap 
 Compare 1 with 4 → swap 
 Compare 1 with 3 → swap → `[1, 3, 4, 5, 2]`
- **Step 4**: Compare 2 with 5 → swap 
 Compare 2 with 4 → swap 
 Compare 2 with 3 → swap → `[1, 2, 3, 4, 5]`

---

## ✅ Final Result

After all the steps are executed, the array will be sorted:

Translated with DeepL.com (free version)


---

## 📝 Catatan

- Insertion Sort works very well for small element size array atau or with elements almost sorted.
- Time Complexity:
  - **Best-Case (Almost Sorted)**: O(n)
  - **Average-Case / Worst-Case**: O(n²)
