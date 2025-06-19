import React, { useState, useEffect } from 'react';
import { Calendar, Target, Code2, BookOpen, Trophy, CheckCircle2, Circle, ChevronLeft, ChevronRight, Star, Zap, Users, Clock, TrendingUp, Award, Brain, ExternalLink } from 'lucide-react';

interface TaskResource {
  text: string;
  url: string;
}

interface DailyTask {
  id: string;
  date: string;
  tasks: Array<{
    text: string;
    resources?: TaskResource[];
  }>;
}

const allDailyTasks: DailyTask[] = [
  {
    id: "2025-06-20",
    date: "Jun 20",
    tasks: [
      {
        text: "Review Graph basics (Adjacency List/Matrix, Traversal).",
        resources: [
          { text: "Striver's TakeUForward", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" },
          { text: "LeetCode", url: "https://leetcode.com/" }
        ]
      },
      {
        text: "Start Striver's TakeUForward Graph playlist/sheets (video explanations).",
        resources: [
          { text: "Striver's Graph Playlist", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" }
        ]
      },
      {
        text: "Python AI/ML: Begin 'Python for Data Science and Machine Learning Bootcamp' - Focus on basic Python syntax review and introduction to NumPy.",
        resources: [
          { text: "Python ML Bootcamp", url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" },
          { text: "NumPy Documentation", url: "https://numpy.org/doc/stable/" }
        ]
      }
    ]
  },
  {
    id: "2025-06-21",
    date: "Jun 21",
    tasks: [
      {
        text: "Continue with BFS/DFS implementations and variations (e.g., Cycle Detection) in Java.",
        resources: [
          { text: "LeetCode Graph Problems", url: "https://leetcode.com/tag/graph/" }
        ]
      },
      {
        text: "Practice 3-4 problems on LeetCode (easy/medium).",
        resources: [
          { text: "LeetCode", url: "https://leetcode.com/" }
        ]
      },
      {
        text: "Python AI/ML: Continue Udemy course, focusing on NumPy.",
        resources: [
          { text: "NumPy Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" }
        ]
      }
    ]
  },
  {
    id: "2025-06-22",
    date: "Jun 22",
    tasks: [
      {
        text: "Introduce Dijkstra's Algorithm (video explanation).",
        resources: [
          { text: "Striver's Dijkstra Tutorial", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" }
        ]
      },
      {
        text: "Understand the greedy approach and implementation.",
        resources: [
          { text: "Greedy Algorithms Guide", url: "https://www.geeksforgeeks.org/greedy-algorithms/" }
        ]
      },
      {
        text: "Practice 2 problems.",
        resources: [
          { text: "LeetCode Dijkstra Problems", url: "https://leetcode.com/tag/shortest-path/" }
        ]
      },
      {
        text: "Python AI/ML: Continue Udemy course, focusing on NumPy and early Pandas.",
        resources: [
          { text: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" }
        ]
      }
    ]
  },
  {
      id: "2025-06-23",
      date: "Jun 23",
      tasks: [
          {
              text: "Work on Bellman-Ford and Floyd-Warshall (video explanations).",
              resources: [
                  { text: "Striver's Bellman-Ford Tutorial", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" },
                  { text: "Striver's Floyd-Warshall Tutorial", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" }
              ]
          },
          {
              text: "Understand their applications and differences from Dijkstra.",
              resources: [
                  { text: "GeeksforGeeks Shortest Path Comparison", url: "https://www.geeksforgeeks.org/difference-between-dijkstras-and-bellman-ford-algorithms/" }
              ]
          },
          {
              text: "Practice 2 problems.",
              resources: [
                  { text: "LeetCode Shortest Path Problems", url: "https://leetcode.com/tag/shortest-path/" }
              ]
          },
          {
              text: "Python AI/ML: Continue Udemy course, focusing on Pandas.",
              resources: [
                  { text: "Pandas User Guide", url: "https://pandas.pydata.org/docs/user_guide/index.html" }
              ]
          }
      ]
  },
  {
      id: "2025-06-24",
      date: "Jun 24",
      tasks: [
          {
              text: "Start with Minimum Spanning Trees (MSTs) - Prim's Algorithm (video explanation).",
              resources: [
                  { text: "Striver's Prim's Algorithm Tutorial", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" }
              ]
          },
          {
              text: "Implementation and practice.",
              resources: [
                  { text: "LeetCode MST Problems", url: "https://leetcode.com/tag/minimum-spanning-tree/" }
              ]
          },
          {
              text: "Python AI/ML: Continue Udemy course, focusing on Matplotlib/Seaborn basics.",
              resources: [
                  { text: "Matplotlib Documentation", url: "https://matplotlib.org/stable/contents.html" },
                  { text: "Seaborn Documentation", url: "https://seaborn.pydata.org/" }
              ]
          }
      ]
  },
  {
      id: "2025-06-25",
      date: "Jun 25",
      tasks: [
          {
              text: "Kruskal's Algorithm for MSTs (video explanation).",
              resources: [
                  { text: "Striver's Kruskal's Algorithm Tutorial", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" }
              ]
          },
          {
              text: "Understand Disjoint Set Union (DSU) needed for Kruskal's.",
              resources: [
                  { text: "GeeksforGeeks DSU", url: "https://www.geeksforgeeks.org/union-find-algorithm-disjoint-set-union-set-1-introduction-and-union-by-rank/" }
              ]
          },
          {
              text: "Practice 2 MST problems.",
              resources: [
                  { text: "LeetCode MST Problems", url: "https://leetcode.com/tag/minimum-spanning-tree/" }
              ]
          },
          {
              text: "Python AI/ML: Continue Udemy course, focusing on Matplotlib/Seaborn basics.",
              resources: [
                  { text: "Matplotlib Basic Plots", url: "https://matplotlib.org/stable/tutorials/introductory/quick_start.html" },
                  { text: "Seaborn Basic Plots", url: "https://seaborn.pydata.org/tutorial/introduction.html" }
              ]
          }
      ]
  },
  {
      id: "2025-06-26",
      date: "Jun 26",
      tasks: [
          {
              text: "Review all Graph algorithms covered this week.",
              resources: [
                  { text: "Striver's Graph Playlist Review", url: "https://www.takeuforward.org/strivers-a2z-dsa-course/" }
              ]
          },
          {
              text: "Solve 3-4 mixed Graph problems on LeetCode/AlgoExpert.",
              resources: [
                  { text: "LeetCode Graph Tag", url: "https://leetcode.com/tag/graph/" },
                  { text: "AlgoExpert.io (Paid)", url: "https://www.algoexpert.io/" }
              ]
          },
          {
              text: "Python AI/ML: Finish introductory sections of Udemy course, ensuring basic familiarity with NumPy, Pandas, Matplotlib/Seaborn.",
              resources: [
                  { text: "Udemy Course Completion", url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" }
              ]
          }
      ]
  },
  {
      id: "2025-06-27",
      date: "Jun 27",
      tasks: [
          {
              text: "Introduction to Dynamic Programming (video explanation).",
              resources: [
                  { text: "Striver's DP Playlist", url: "https://www.takeuforward.org/dynamic-programming-a-to-z-course/" }
              ]
          },
          {
              text: "Understand memoization vs. tabulation.",
              resources: [
                  { text: "GeeksforGeeks Memoization vs Tabulation", url: "https://www.geeksforgeeks.org/tabulation-vs-memoization-vs-recursion/" }
              ]
          },
          {
              text: "Start with basic 1D DP problems (e.g., Fibonacci, climbing stairs).",
              resources: [
                  { text: "LeetCode DP Easy", url: "https://leetcode.com/tag/dynamic-programming/" }
              ]
          },
          {
              text: "Python AI/ML: Start Andrew Ng's Machine Learning Course (Coursera) - Focus on foundational concepts and mathematical understanding of ML (Supervised Learning, Linear Regression).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          }
      ]
  },
  {
      id: "2025-06-28",
      date: "Jun 28",
      tasks: [
          {
              text: "DP on Grids (e.g., unique paths, minimum path sum).",
              resources: [
                  { text: "Striver's DP on Grids", url: "https://www.takeuforward.org/dynamic-programming-a-to-z-course/" }
              ]
          },
          {
              text: "Practice 3 problems.",
              resources: [
                  { text: "LeetCode DP Grid Problems", url: "https://leetcode.com/tag/dynamic-programming/" }
              ]
          },
          {
              text: "Python AI/ML: Andrew Ng's ML Course - Gradient Descent, Multivariate Linear Regression.",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          }
      ]
  },
  {
      id: "2025-06-29",
      date: "Jun 29",
      tasks: [
          {
              text: "DP on Sequences/Arrays (e.g., Longest Common Subsequence, Longest Increasing Subsequence).",
              resources: [
                  { text: "Striver's DP on Sequences", url: "https://www.takeuforward.org/dynamic-programming-a-to-z-course/" }
              ]
          },
          {
              text: "Practice 3 problems.",
              resources: [
                  { text: "LeetCode DP Sequence Problems", url: "https://leetcode.com/tag/dynamic-programming/" }
              ]
          },
          {
              text: "Python AI/ML: Andrew Ng's ML Course - Logistic Regression, Regularization.",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          }
      ]
  },
  {
      id: "2025-06-30",
      date: "Jun 30",
      tasks: [
          {
              text: "Knapsack Problem variations (0/1 Knapsack, Unbounded Knapsack).",
              resources: [
                  { text: "Striver's Knapsack Problems", url: "https://www.takeuforward.org/dynamic-programming-a-to-z-course/" }
              ]
          },
          {
              text: "Practice 2-3 problems.",
              resources: [
                  { text: "LeetCode Knapsack Problems", url: "https://leetcode.com/tag/dynamic-programming/" }
              ]
          },
          {
              text: "Python AI/ML: Andrew Ng's ML Course - Neural Networks (basic architecture, backpropagation intuition).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          }
      ]
  },
  {
      id: "2025-07-01",
      date: "Jul 1",
      tasks: [
          {
              text: "DP on Strings (e.g., Edit Distance, Palindromic Subsequences).",
              resources: [
                  { text: "Striver's DP on Strings", url: "https://www.takeuforward.org/dynamic-programming-a-to-z-course/" }
              ]
          },
          {
              text: "Practice 2-3 problems.",
              resources: [
                  { text: "LeetCode DP String Problems", url: "https://leetcode.com/tag/dynamic-programming/" }
              ]
          },
          {
              text: "Python AI/ML: Andrew Ng's ML Course - Support Vector Machines (SVMs) - intuition.",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          }
      ]
  },
  {
      id: "2025-07-02",
      date: "Jul 2",
      tasks: [
          {
              text: "Tree DP patterns.",
              resources: [
                  { text: "Striver's Tree DP", url: "https://www.takeuforward.org/dynamic-programming-a-to-z-course/" }
              ]
          },
          {
              text: "Practice 2 problems.",
              resources: [
                  { text: "LeetCode Tree DP Problems", url: "https://leetcode.com/tag/dynamic-programming/" }
              ]
          },
          {
              text: "Python AI/ML: Andrew Ng's ML Course - Unsupervised Learning (Clustering - K-Means), Dimensionality Reduction (PCA).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          }
      ]
  },
  {
      id: "2025-07-03",
      date: "Jul 3",
      tasks: [
          {
              text: "Mixed DP problems from LeetCode Medium/Hard. Focus on problem recognition and applying appropriate patterns.",
              resources: [
                  { text: "LeetCode DP Medium/Hard", url: "https://leetcode.com/tag/dynamic-programming/" },
                  { text: "NeetCode.io DP", url: "https://neetcode.io/roadmap/dp/" }
              ]
          },
          {
              text: "Python AI/ML: Andrew Ng's ML Course - Anomaly Detection, Recommender Systems. Review key concepts and assignments (port concepts to Python if possible).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          }
      ]
  },
  {
      id: "2025-07-04",
      date: "Jul 4",
      tasks: [
          {
              text: "Review Binary Search Trees (BSTs) and start Balanced BSTs (AVL/Red-Black Tree concepts, no deep implementation yet).",
              resources: [
                  { text: "Striver's BSTs", url: "https://www.takeuforward.org/data-structures/binary-search-tree-introduction/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" },
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          },
          {
              text: "Python AI/ML: Start 'Machine Learning A-Z™: AI, Python & R Data Science' (Udemy) - Data Preprocessing.",
              resources: [
                  { text: "ML A-Z Udemy Course", url: "https://www.udemy.com/course/machinelearning/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-05",
      date: "Jul 5",
      tasks: [
          {
              text: "Heaps (Min/Max Heap implementation from scratch or using `PriorityQueue`).",
              resources: [
                  { text: "Striver's Heaps", url: "https://www.takeuforward.org/data-structures/introduction-to-heap-priority-queue/" }
              ]
          },
          {
              text: "Practice 3-4 problems (e.g., Kth largest element, merge k sorted lists).",
              resources: [
                  { text: "LeetCode Heap Problems", url: "https://leetcode.com/tag/heap/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          },
          {
              text: "Python AI/ML: Implement Linear Regression and Logistic Regression (Scikit-learn).",
              resources: [
                  { text: "Scikit-learn Linear Models", url: "https://scikit-learn.org/stable/modules/linear_model.html" }
              ]
          }
      ]
  },
  {
      id: "2025-07-06",
      date: "Jul 6",
      tasks: [
          {
              text: "Tries (Prefix Tree) implementation.",
              resources: [
                  { text: "Striver's Tries", url: "https://www.takeuforward.org/data-structures/trie-data-structure/" }
              ]
          },
          {
              text: "Practice problems involving string searching/prefix matching.",
              resources: [
                  { text: "LeetCode Trie Problems", url: "https://leetcode.com/tag/trie/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          },
          {
              text: "Python AI/ML: Implement K-Nearest Neighbors (KNN) and Support Vector Machines (SVMs) using Scikit-learn.",
              resources: [
                  { text: "Scikit-learn KNN", url: "https://scikit-learn.org/stable/modules/neighbors.html" },
                  { text: "Scikit-learn SVM", url: "https://scikit-learn.org/stable/modules/svm.html" }
              ]
          }
      ]
  },
  {
      id: "2025-07-07",
      date: "Jul 7",
      tasks: [
          {
              text: "Segment Trees (introduction, range query, point update).",
              resources: [
                  { text: "Striver's Segment Tree", url: "https://www.takeuforward.org/data-structures/segment-tree-introduction/" }
              ]
          },
          {
              text: "Understand the structure and build process.",
              resources: [
                  { text: "GeeksforGeeks Segment Tree", url: "https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/" }
              ]
          },
          {
              text: "Practice 2 problems.",
              resources: [
                  { text: "LeetCode Segment Tree", url: "https://leetcode.com/tag/segment-tree/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "AtCoder", url: "https://atcoder.jp/" }
              ]
          },
          {
              text: "Python AI/ML: Decision Trees and Random Forests implementation with Scikit-learn.",
              resources: [
                  { text: "Scikit-learn Decision Trees", url: "https://scikit-learn.org/stable/modules/tree.html" },
                  { text: "Scikit-learn Random Forests", url: "https://scikit-learn.org/stable/modules/ensemble.html#random-forests" }
              ]
          }
      ]
  },
  {
      id: "2025-07-08",
      date: "Jul 8",
      tasks: [
          {
              text: "Segment Trees (range update, lazy propagation).",
              resources: [
                  { text: "Striver's Segment Tree Lazy Propagation", url: "https://www.takeuforward.org/data-structures/segment-tree-lazy-propagation/" }
              ]
          },
          {
              text: "Practice 2 problems.",
              resources: [
                  { text: "LeetCode Segment Tree", url: "https://leetcode.com/tag/segment-tree/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          },
          {
              text: "Python AI/ML: K-Means Clustering and Hierarchical Clustering implementation.",
              resources: [
                  { text: "Scikit-learn K-Means", url: "https://scikit-learn.org/stable/modules/clustering.html#k-means" },
                  { text: "Scikit-learn Hierarchical Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering" }
              ]
          }
      ]
  },
  {
      id: "2025-07-09",
      date: "Jul 9",
      tasks: [
          {
              text: "Fenwick Trees (BIT - Binary Indexed Tree).",
              resources: [
                  { text: "Striver's Fenwick Tree", url: "https://www.takeuforward.org/data-structures/binary-indexed-tree-fenwick-tree-data-structure/" }
              ]
          },
          {
              text: "Understand applications for prefix sums and updates.",
              resources: [
                  { text: "GeeksforGeeks Fenwick Tree", url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/" }
              ]
          },
          {
              text: "Practice 2 problems.",
              resources: [
                  { text: "LeetCode Fenwick Tree", url: "https://leetcode.com/tag/binary-indexed-tree/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          },
          {
              text: "Python AI/ML: Dimensionality Reduction (PCA) and model evaluation metrics.",
              resources: [
                  { text: "Scikit-learn PCA", url: "https://scikit-learn.org/stable/modules/decomposition.html#pca" },
                  { text: "Scikit-learn Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" }
              ]
          }
      ]
  },
  {
      id: "2025-07-10",
      date: "Jul 10",
      tasks: [
          {
              text: "Mixed problems focusing on Trees, Heaps, and Tries from LeetCode Hard.",
              resources: [
                  { text: "LeetCode Hard Problems", url: "https://leetcode.com/problemset/all/?difficulty=HARD" },
                  { text: "NeetCode.io Advanced Topics", url: "https://neetcode.io/roadmap/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "AtCoder", url: "https://atcoder.jp/" }
              ]
          },
          {
              text: "Python AI/ML: End-to-end small ML project.",
              resources: [
                  { text: "Kaggle", url: "https://www.kaggle.com/datasets" },
                  { text: "UCI Machine Learning Repository", url: "https://archive.ics.uci.edu/ml/index.php" }
              ]
          }
      ]
  },
  {
      id: "2025-07-11",
      date: "Jul 11",
      tasks: [
          {
              text: "Number Theory: Primes (Sieve of Eratosthenes), GCD, LCM, Modular Arithmetic.",
              resources: [
                  { text: "Striver's Number Theory", url: "https://www.takeuforward.org/competitive-programming/number-theory-for-competitive-programming/" }
              ]
          },
          {
              text: "Practice 3-4 problems.",
              resources: [
                  { text: "LeetCode Number Theory", url: "https://leetcode.com/tag/math/" }
              ]
          },
          {
              text: "Python AI/ML: Start 'The Complete Python Developer in 202X: Zero to Mastery' (Udemy) or similar – Focus on Python Project Structure (setup.py/pyproject.toml, virtual environments).",
              resources: [
                  { text: "Complete Python Developer Udemy", url: "https://www.udemy.com/course/complete-python-developer-zero-to-mastery/" },
                  { text: "Real Python Packaging", url: "https://realpython.com/python-application-layouts/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-12",
      date: "Jul 12",
      tasks: [
          {
              text: "Bit Manipulation: Basic operations (AND, OR, XOR, NOT), Bit Masks, Power of 2, Counting set bits.",
              resources: [
                  { text: "Striver's Bit Manipulation", url: "https://www.takeuforward.org/data-structures/bit-manipulation-for-competitive-programming/" }
              ]
          },
          {
              text: "Practice 3-4 problems.",
              resources: [
                  { text: "LeetCode Bit Manipulation", url: "https://leetcode.com/tag/bit-manipulation/" }
              ]
          },
          {
              text: "Python AI/ML: Dependency Management (pip, Poetry, pipenv). Create a small project and manage dependencies.",
              resources: [
                  { text: "Poetry Documentation", url: "https://python-poetry.org/docs/" },
                  { text: "Pipenv Guide", url: "https://pipenv.pypa.io/en/latest/install/#installing-pipenv" }
              ]
          }
      ]
  },
  {
      id: "2025-07-13",
      date: "Jul 13",
      tasks: [
          {
              text: "More advanced Bit Manipulation techniques.",
              resources: [
                  { text: "GeeksforGeeks Advanced Bit Manipulation", url: "https://www.geeksforgeeks.org/bitwise-algorithms/" }
              ]
          },
          {
              text: "Practice 2-3 problems.",
              resources: [
                  { text: "LeetCode Bit Manipulation", url: "https://leetcode.com/tag/bit-manipulation/" }
              ]
          },
          {
              text: "Python AI/ML: Unit Testing with `unittest`. Write tests for a simple Python module.",
              resources: [
                  { text: "Python unittest Documentation", url: "https://docs.python.org/3/library/unittest.html" }
              ]
          }
      ]
  },
  {
      id: "2025-07-14",
      date: "Jul 14",
      tasks: [
          {
              text: "Competitive Programming: Introduction to Codeforces/AtCoder. Participate in a Div 2 (Codeforces) or Beginner (AtCoder) contest. Focus on understanding the platform and time management.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" },
                  { text: "AtCoder", url: "https://atcoder.jp/" }
              ]
          },
          {
              text: "Python AI/ML: Unit Testing with `pytest`. Learn `pytest` fixtures, assertions. Convert `unittest` tests to `pytest`.",
              resources: [
                  { text: "Pytest Documentation", url: "https://docs.pytest.org/en/stable/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-15",
      date: "Jul 15",
      tasks: [
          {
              text: "Analyze contest problems, learn from editorials.",
              resources: [
                  { text: "Codeforces Editorials", url: "https://codeforces.com/problemset/status" }
              ]
          },
          {
              text: "Solve 3-4 additional LeetCode Medium/Hard problems on advanced DSA topics.",
              resources: [
                  { text: "LeetCode Medium/Hard", url: "https://leetcode.com/problemset/all/?difficulty=MEDIUM&difficulty=HARD" }
              ]
          },
          {
              text: "Python AI/ML: Integration Testing concepts. Learn about mock objects for testing external dependencies.",
              resources: [
                  { text: "Python unittest.mock Documentation", url: "https://docs.python.org/3/library/unittest.mock.html" }
              ]
          }
      ]
  },
  {
      id: "2025-07-16",
      date: "Jul 16",
      tasks: [
          {
              text: "Participate in another competitive programming contest.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" },
                  { text: "AtCoder", url: "https://atcoder.jp/" }
              ]
          },
          {
              text: "Python AI/ML: Logging: Python's `logging` module. Implement effective logging in a sample application.",
              resources: [
                  { text: "Python logging Documentation", url: "https://docs.python.org/3/library/logging.html" }
              ]
          }
      ]
  },
  {
      id: "2025-07-17",
      date: "Jul 17",
      tasks: [
          {
              text: "Analyze contest problems and solidify understanding of advanced DSA through practice.",
              resources: [
                  { text: "Competitive Programming Platforms", url: "https://codeforces.com/" }
              ]
          },
          {
              text: "Python AI/ML: Code Quality: Linters (Flake8, Black). Set up linters for your Python projects and practice code formatting.",
              resources: [
                  { text: "Flake8 Documentation", url: "https://flake8.pycqa.org/en/latest/" },
                  { text: "Black Documentation", url: "https://github.com/psf/black" }
              ]
          }
      ]
  },
  {
      id: "2025-07-18",
      date: "Jul 18",
      tasks: [
          {
              text: "Andrew Ng's ML Course: Supervised Learning Introduction, Linear Regression (theory and cost function).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" },
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-19",
      date: "Jul 19",
      tasks: [
          {
              text: "Andrew Ng's ML Course: Gradient Descent, Multivariate Linear Regression.",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-20",
      date: "Jul 20",
      tasks: [
          {
              text: "Andrew Ng's ML Course: Logistic Regression, Regularization.",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-21",
      date: "Jul 21",
      tasks: [
          {
              text: "Andrew Ng's ML Course: Neural Networks (basic architecture, backpropagation intuition).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-22",
      date: "Jul 22",
      tasks: [
          {
              text: "Andrew Ng's ML Course: Support Vector Machines (SVMs) - intuition.",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-23",
      date: "Jul 23",
      tasks: [
          {
              text: "Andrew Ng's ML Course: Unsupervised Learning (Clustering - K-Means), Dimensionality Reduction (PCA).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-24",
      date: "Jul 24",
      tasks: [
          {
              text: "Andrew Ng's ML Course: Anomaly Detection, Recommender Systems. Review key concepts and assignments (port concepts to Python if possible).",
              resources: [
                  { text: "Andrew Ng's ML Course", url: "https://www.coursera.org/learn/machine-learning" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-25",
      date: "Jul 25",
      tasks: [
          {
              text: "Start 'Machine Learning A-Z™: AI, Python & R Data Science' (Udemy).",
              resources: [
                  { text: "ML A-Z Udemy Course", url: "https://www.udemy.com/course/machinelearning/" }
              ]
          },
          {
              text: "Focus on data preprocessing techniques (handling missing data, encoding categorical data, feature scaling).",
              resources: [
                  { text: "Scikit-learn Preprocessing", url: "https://scikit-learn.org/stable/modules/preprocessing.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-26",
      date: "Jul 26",
      tasks: [
          {
              text: "Implement Linear Regression and Logistic Regression from scratch (or using NumPy) and then using Scikit-learn.",
              resources: [
                  { text: "Scikit-learn Linear Models", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
                  { text: "NumPy Documentation", url: "https://numpy.org/doc/stable/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-27",
      date: "Jul 27",
      tasks: [
          {
              text: "Implement K-Nearest Neighbors (KNN) and Support Vector Machines (SVMs) using Scikit-learn.",
              resources: [
                  { text: "Scikit-learn KNN", url: "https://scikit-learn.org/stable/modules/neighbors.html" },
                  { text: "Scikit-learn SVM", url: "https://scikit-learn.org/stable/modules/svm.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-28",
      date: "Jul 28",
      tasks: [
          {
              text: "Decision Trees and Random Forests implementation with Scikit-learn.",
              resources: [
                  { text: "Scikit-learn Decision Trees", url: "https://scikit-learn.org/stable/modules/tree.html" },
                  { text: "Scikit-learn Random Forests", url: "https://scikit-learn.org/stable/modules/ensemble.html#random-forests" }
              ]
          },
          {
              text: "Understand ensemble methods.",
              resources: [
                  { text: "Scikit-learn Ensemble Methods", url: "https://scikit-learn.org/stable/modules/ensemble.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-29",
      date: "Jul 29",
      tasks: [
          {
              text: "K-Means Clustering and Hierarchical Clustering implementation.",
              resources: [
                  { text: "Scikit-learn K-Means", url: "https://scikit-learn.org/stable/modules/clustering.html#k-means" },
                  { text: "Scikit-learn Hierarchical Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-30",
      date: "Jul 30",
      tasks: [
          {
              text: "Dimensionality Reduction (PCA) and model evaluation metrics (accuracy, precision, recall, F1-score, confusion matrix).",
              resources: [
                  { text: "Scikit-learn PCA", url: "https://scikit-learn.org/stable/modules/decomposition.html#pca" },
                  { text: "Scikit-learn Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-07-31",
      date: "Jul 31",
      tasks: [
          {
              text: "End-to-end small ML project (e.g., classification on a small dataset from Kaggle or UCI repository).",
              resources: [
                  { text: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" },
                  { text: "UCI ML Repository", url: "https://archive.ics.uci.edu/ml/index.php" }
              ]
          },
          {
              text: "Focus on data loading, preprocessing, model training, and evaluation.",
              resources: [
                  { text: "Scikit-learn Model Selection", url: "https://scikit-learn.org/stable/modules/classes.html#module-sklearn.model_selection" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-01",
      date: "Aug 1",
      tasks: [
          {
              text: "Python Project Structure: `setup.py`/`pyproject.toml`, virtual environments (venv, conda).",
              resources: [
                  { text: "Real Python Project Layouts", url: "https://realpython.com/python-application-layouts/" },
                  { text: "Python venv Docs", url: "https://docs.python.org/3/library/venv.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-02",
      date: "Aug 2",
      tasks: [
          {
              text: "Dependency Management: `pip` (requirements.txt), Poetry, `pipenv`.",
              resources: [
                  { text: "Poetry Documentation", url: "https://python-poetry.org/docs/" },
                  { text: "Pipenv Guide", url: "https://pipenv.pypa.io/en/latest/install/#installing-pipenv" }
              ]
          },
          {
              text: "Create a small project and manage dependencies.",
              resources: [
                  { text: "Real Python Dependency Management", url: "https://realpython.com/python-project-dependencies/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-03",
      date: "Aug 3",
      tasks: [
          {
              text: "Unit Testing with `unittest`. Write tests for a simple Python module.",
              resources: [
                  { text: "Python unittest Documentation", url: "https://docs.python.org/3/library/unittest.html" },
                  { text: "Real Python Unit Testing", url: "https://realpython.com/python-unit-testing/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-04",
      date: "Aug 4",
      tasks: [
          {
              text: "Unit Testing with `pytest`. Learn `pytest` fixtures, assertions. Convert `unittest` tests to `pytest`.",
              resources: [
                  { text: "Pytest Documentation", url: "https://docs.pytest.org/en/stable/" },
                  { text: "Real Python Pytest Tutorial", url: "https://realpython.com/pytest-python/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-05",
      date: "Aug 5",
      tasks: [
          {
              text: "Integration Testing concepts. Learn about mock objects for testing external dependencies.",
              resources: [
                  { text: "Python unittest.mock Documentation", url: "https://docs.python.org/3/library/unittest.mock.html" },
                  { text: "Testing Python Applications", url: "https://realpython.com/testing-third-party-apis-with-mocks/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-06",
      date: "Aug 6",
      tasks: [
          {
              text: "Logging: Python's `logging` module. Implement effective logging in a sample application.",
              resources: [
                  { text: "Python logging Documentation", url: "https://docs.python.org/3/library/logging.html" },
                  { text: "Real Python Logging Tutorial", url: "https://realpython.com/python-logging/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-07",
      date: "Aug 7",
      tasks: [
          {
              text: "Code Quality: Linters (Flake8, Black). Set up linters for your Python projects and practice code formatting.",
              resources: [
                  { text: "Flake8 Documentation", url: "https://flake8.pycqa.org/en/latest/" },
                  { text: "Black Documentation", url: "https://github.com/psf/black" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-08",
      date: "Aug 8",
      tasks: [
          {
              text: "API Development: Introduction to Flask (basic routes, request/response).",
              resources: [
                  { text: "Flask Documentation", url: "https://flask.palletsprojects.com/en/latest/" },
                  { text: "Real Python Flask API", url: "https://realpython.com/flask-by-example-implementing-a-restful-api/" }
              ]
          },
          {
              text: "Build a simple 'Hello World' API.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-09",
      date: "Aug 9",
      tasks: [
          {
              text: "FastAPI: Introduction, advantages over Flask (async, data validation).",
              resources: [
                  { text: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/" },
                  { text: "Real Python FastAPI Tutorial", url: "https://realpython.com/fastapi-python-web-apis/" }
              ]
          },
          {
              text: "Build a simple REST API.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-10",
      date: "Aug 10",
      tasks: [
          {
              text: "FastAPI: Data validation with Pydantic, handling request bodies, path parameters.",
              resources: [
                  { text: "Pydantic Documentation", url: "https://pydantic-docs.helpmanual.io/" },
                  { text: "FastAPI Path Parameters", url: "https://fastapi.tiangolo.com/tutorial/path-params/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-11",
      date: "Aug 11",
      tasks: [
          {
              text: "Deploy a simple ML model as a web service using FastAPI (e.g., a pre-trained Scikit-learn model).",
              resources: [
                  { text: "FastAPI ML Deployment", url: "https://fastapi.tiangolo.com/deployment/" },
                  { text: "Scikit-learn Model Persistence", url: "https://scikit-learn.org/stable/modules/model_persistence.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-12",
      date: "Aug 12",
      tasks: [
          {
              text: "Concurrency: Threads vs. Processes.",
              resources: [
                  { text: "Python threading Documentation", url: "https://docs.python.org/3/library/threading.html" },
                  { text: "Python multiprocessing Documentation", url: "https://docs.python.org/3/library/multiprocessing.html" }
              ]
          },
          {
              text: "Introduction to Python's `threading` and `multiprocessing` modules.",
              resources: [
                  { text: "Real Python Concurrency", url: "https://realpython.com/python-concurrency/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-13",
      date: "Aug 13",
      tasks: [
          {
              text: "Asynchronous programming with `asyncio`.",
              resources: [
                  { text: "Python asyncio Documentation", url: "https://docs.python.org/3/library/asyncio.html" },
                  { text: "Real Python Async IO", url: "https://realpython.com/async-io-python/" }
              ]
          },
          {
              text: "Understand `async`/`await` for I/O-bound tasks.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-14",
      date: "Aug 14",
      tasks: [
          {
              text: "Code Quality: Type Hinting (`mypy`).",
              resources: [
                  { text: "Python Type Hinting Documentation", url: "https://docs.python.org/3/library/typing.html" },
                  { text: "Mypy Documentation", url: "https://mypy.readthedocs.io/en/stable/" }
              ]
          },
          {
              text: "Add type hints to your Python projects and use `mypy` for static analysis.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-15",
      date: "Aug 15",
      tasks: [
          {
              text: "Start fast.ai's 'Practical Deep Learning for Coders'.",
              resources: [
                  { text: "fast.ai Course", url: "https://course.fast.ai/" }
              ]
          },
          {
              text: "Introduction to PyTorch, Tensors.",
              resources: [
                  { text: "PyTorch Documentation", url: "https://pytorch.org/docs/stable/index.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-16",
      date: "Aug 16",
      tasks: [
          {
              text: "Neural Network basics with PyTorch (Linear Layers, Activations).",
              resources: [
                  { text: "PyTorch NN Module", url: "https://pytorch.org/docs/stable/nn.html" }
              ]
          },
          {
              text: "Build a simple classification model.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-17",
      date: "Aug 17",
      tasks: [
          {
              text: "Training loop, Loss Functions, Optimizers.",
              resources: [
                  { text: "PyTorch Optimizers", url: "https://pytorch.org/docs/stable/optim.html" },
                  { text: "PyTorch Loss Functions", url: "https://pytorch.org/docs/stable/nn.html#loss-functions" }
              ]
          },
          {
              text: "Train your first neural network on a simple dataset.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-18",
      date: "Aug 18",
      tasks: [
          {
              text: "Convolutional Neural Networks (CNNs) for Image Classification.",
              resources: [
                  { text: "PyTorch CNN Tutorial", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" }
              ]
          },
          {
              text: "Understand convolution, pooling layers.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-19",
      date: "Aug 19",
      tasks: [
          {
              text: "Implement a simple CNN with PyTorch for a dataset like MNIST or CIFAR-10.",
              resources: [
                  { text: "PyTorch Datasets", url: "https://pytorch.org/vision/main/datasets.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-20",
      date: "Aug 20",
      tasks: [
          {
              text: "Transfer Learning with pre-trained CNNs (e.g., ResNet, VGG).",
              resources: [
                  { text: "PyTorch Transfer Learning Tutorial", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" }
              ]
          },
          {
              text: "Fine-tuning for a custom dataset.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-21",
      date: "Aug 21",
      tasks: [
          {
              text: "Introduction to Recurrent Neural Networks (RNNs) for sequence data (basic concepts).",
              resources: [
                  { text: "PyTorch RNN Documentation", url: "https://pytorch.org/docs/stable/generated/torch.nn.RNN.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-22",
      date: "Aug 22",
      tasks: [
          {
              text: "'The Missing Semester of Your CS Education' (MIT): Focus on 'Version Control (Git)' module.",
              resources: [
                  { text: "MIT Missing Semester Git", url: "https://missing.csail.mit.edu/2020/version-control/" }
              ]
          },
          {
              text: "Understand Git basics: `init`, `add`, `commit`.",
              resources: [
                  { text: "Git Basic Commands", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-23",
      date: "Aug 23",
      tasks: [
          {
              text: "Git branching (`branch`, `checkout`, `merge`).",
              resources: [
                  { text: "Git Branching", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" }
              ]
          },
          {
              text: "Practice creating branches, merging, resolving conflicts.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-24",
      date: "Aug 24",
      tasks: [
          {
              text: "Remote repositories (`push`, `pull`, `clone`).",
              resources: [
                  { text: "Git Remotes", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes" }
              ]
          },
          {
              text: "Practice working with GitHub.",
              resources: [
                  { text: "GitHub Docs", url: "https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-25",
      date: "Aug 25",
      tasks: [
          {
              text: "Pull Requests (PRs) on GitHub: creating PRs, reviewing, merging.",
              resources: [
                  { text: "GitHub PR Guide", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" }
              ]
          },
          {
              text: "Practice submitting PRs to your own repositories.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-26",
      date: "Aug 26",
      tasks: [
          {
              text: "Git commands: `rebase`, `stash`, `log`, `diff`.",
              resources: [
                  { text: "Git Rebase", url: "https://git-scm.com/docs/git-rebase" },
                  { text: "Git Stash", url: "https://git-scm.com/docs/git-stash" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-27",
      date: "Aug 27",
      tasks: [
          {
              text: "Collaborative workflows on GitHub (forking, contributing to open-source projects - theoretical).",
              resources: [
                  { text: "GitHub Forking Guide", url: "https://docs.github.com/en/get-started/quickstart/contributing-to-projects" }
              ]
          },
          {
              text: "Set up personal projects on GitHub for Java DSA and Python AI/ML work.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-28",
      date: "Aug 28",
      tasks: [
          {
              text: "Practice daily commits, branching, merging, and submitting pull requests to your own repositories.",
              resources: [
                  { text: "GitHub Practice", url: "https://docs.github.com/en" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-29",
      date: "Aug 29",
      tasks: [
          {
              text: "'The Missing Semester of Your CS Education' (MIT): Focus on 'Shell Tools and Scripting'.",
              resources: [
                  { text: "MIT Missing Semester Shell", url: "https://missing.csail.mit.edu/2020/shell-tools/" }
              ]
          },
          {
              text: "Basic Linux commands (`ls`, `cd`, `mkdir`, `rm`, `cp`, `mv`).",
              resources: [
                  { text: "Linux Commands Cheatsheet", url: "https://www.hostinger.in/tutorials/linux-commands" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-30",
      date: "Aug 30",
      tasks: [
          {
              text: "File permissions (`chmod`), ownership (`chown`).",
              resources: [
                  { text: "Linux File Permissions", url: "https://www.linuxfoundation.org/blog/how-to-manage-file-permissions-on-linux/" }
              ]
          },
          {
              text: "Piping and redirection (`|`, `>`, `>>`).",
              resources: [
                  { text: "Linux I/O Redirection", url: "https://ryanstutorials.net/linuxtutorial/redirection.php" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-08-31",
      date: "Aug 31",
      tasks: [
          {
              text: "Shell scripting basics (variables, loops, conditionals).",
              resources: [
                  { text: "Shell Scripting Tutorial", url: "https://ryanstutorials.net/linuxtutorial/bashscripting.php" }
              ]
          },
          {
              text: "Write simple scripts.",
              resources: []
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-09-01",
      date: "Sep 1",
      tasks: [
          {
              text: "Professional IDE Usage: PyCharm for Python.",
              resources: [
                  { text: "PyCharm Documentation", url: "https://www.jetbrains.com/help/pycharm/" }
              ]
          },
          {
              text: "Master debugging, refactoring, code navigation.",
              resources: [
                  { text: "PyCharm Debugging", url: "https://www.jetbrains.com/help/pycharm/debugging-code.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-09-02",
      date: "Sep 2",
      tasks: [
          {
              text: "IntelliJ IDEA for Java.",
              resources: [
                  { text: "IntelliJ IDEA Documentation", url: "https://www.jetbrains.com/help/idea/" }
              ]
          },
          {
              text: "Debugging, refactoring, Maven/Gradle basics.",
              resources: [
                  { text: "IntelliJ IDEA Debugging", url: "https://www.jetbrains.com/help/idea/debugging-code.html" },
                  { text: "Maven", url: "https://maven.apache.org/" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-09-03",
      date: "Sep 3",
      tasks: [
          {
              text: "VS Code for both.",
              resources: [
                  { text: "VS Code Documentation", url: "https://code.visualstudio.com/docs" }
              ]
          },
          {
              text: "Extensions for Python/Java, integrated terminal usage.",
              resources: [
                  { text: "VS Code Python Extension", url: "https://marketplace.visualstudio.com/items?itemName=ms-python.python" },
                  { text: "VS Code Java Extension", url: "https://marketplace.visualstudio.com/items?itemName=redhat.java" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-09-04",
      date: "Sep 4",
      tasks: [
          {
              text: "Practice using IDEs for your ongoing DSA and Python projects.",
              resources: []
          },
          {
              text: "Get comfortable with basic build tools for each language.",
              resources: [
                  { text: "Python Build Tools", url: "https://docs.python.org/3/library/distutils.html" }
              ]
          },
          {
              text: "DSA Practice (Daily 1 hour): Continue LeetCode (Medium/Hard) and participate in 1 competitive programming contest this week.",
              resources: [
                  { text: "Codeforces", url: "https://codeforces.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-09-05", // This task spans multiple days, but we will have it on a single entry for now.
      date: "Sep 5 - Sep 25",
      tasks: [
          {
              text: "Allocate time based on your strengths and weaknesses.",
              resources: []
          },
          {
              text: "**DSA (Java):** Push beyond 500 LeetCode problems. Focus heavily on Medium and Hard difficulties. Participate in 2 competitive programming contests per week. Practice diverse problem types.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" },
                  { text: "Codeforces", url: "https://codeforces.com/" },
                  { text: "AtCoder", url: "https://atcoder.jp/" }
              ]
          },
          {
              text: "**Python AI/ML & Dev:** Work on 1-2 small personal projects that integrate your Python AI/ML skills with general software development practices (e.g., a simple web app that uses a trained ML model, a data analysis tool with a CLI). Apply learned best practices: packaging, testing, logging, Git.",
              resources: [
                  { text: "Real Python Projects", url: "https://realpython.com/tutorials/projects/" }
              ]
          },
          {
              text: "**Review:** Revisit areas where you struggled. Use CLRS selectively for deep theoretical references if needed.",
              resources: [
                  { text: "CLRS (Introduction to Algorithms)", url: "https://mitpress.mit.edu/books/introduction-algorithms" }
              ]
          }
      ]
  },
  {
      id: "2025-09-26", // Representing the start of this block
      date: "Sep 26 - Oct 23",
      tasks: [
          {
              text: "**DSA (Java):** Continue rigorous LeetCode and competitive programming practice. Aim for specific rating goals if you have them.",
              resources: [
                  { text: "LeetCode", url: "https://leetcode.com/" },
                  { text: "Codeforces", url: "https://codeforces.com/" },
                  { text: "AtCoder", url: "https://atcoder.jp/" }
              ]
          },
          {
              text: "**Python AI/ML & Dev:** Work on a slightly more complex personal project to showcase your capabilities. Start thinking about potential project ideas that combine your AI/ML skills with software engineering.",
              resources: [
                  { text: "Kaggle", url: "https://www.kaggle.com/" }
              ]
          },
          {
              text: "**GSoC Organization Identification (Start browsing):** Spend 1-2 hours daily browsing the Google Summer of Code Official Website. Look at past accepted organizations (2023, 2024, 2025 archives). Filter for Python/AI projects. Create a preliminary list of 5-7 potential Python-based organizations.",
              resources: [
                  { text: "GSoC Official Website", url: "https://summerofcode.withgoogle.com/" }
              ]
          }
      ]
  },
  {
      id: "2025-10-24",
      date: "Oct 24 - Oct 30",
      tasks: [
          {
              text: "Finalize your list of 5-7 Python-based GSoC target organizations.",
              resources: [
                  { text: "GSoC Official Website", url: "https://summerofcode.withgoogle.com/" }
              ]
          },
          {
              text: "For each, check community health (mailing lists, Discord/Slack, IRC).",
              resources: []
          },
          {
              text: "Locate 'contributing guidelines' / 'developer guide' for your top 2-3 organizations and read meticulously.",
              resources: []
          },
          {
              text: "Start setting up their development environment for your top 1-2 choices. Document any issues.",
              resources: []
          }
      ]
  },
  {
      id: "2025-10-31",
      date: "Oct 31 - Nov 6",
      tasks: [
          {
              text: "Spend significant time reading and understanding the core architecture, design patterns, and main functionalities of your target Python codebase.",
              resources: []
          },
          {
              text: "Identify 'good first issues' or 'easy fixes' on their issue tracker.",
              resources: [
                  { text: "GitHub Good First Issues", url: "https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22" }
              ]
          },
          {
              text: "Join their primary communication channels. Introduce yourself.",
              resources: []
          },
          {
              text: "Start with documentation improvements, minor bugs, or missing tests.",
              resources: []
          },
          {
              text: "Aim for 1-2 merged PRs by end of week.",
              resources: []
          }
      ]
  },
  {
      id: "2025-11-07",
      date: "Nov 7 - Nov 27",
      tasks: [
          {
              text: "Continue to identify and work on small, high-quality contributions.",
              resources: []
          },
          {
              text: "Read the backlog of community discussions.",
              resources: []
          },
          {
              text: "Ask smart questions. Provide helpful answers.",
              resources: []
          },
          {
              text: "Aim for a total of **3-5 merged Pull Requests (PRs)** by January 2026.",
              resources: []
          },
          {
              text: "Ensure each PR is well-tested, follows coding style, and has a clear commit message.",
              resources: []
          }
      ]
  },
  {
      id: "2025-11-28",
      date: "Nov 28 - Dec 25",
      tasks: [
          {
              text: "As your understanding grows, pick a slightly more involved bug fix or a small feature implementation in Python.",
              resources: []
          },
          {
              text: "Aim for 1-2 such substantial merged PRs by end of Feb.",
              resources: []
          },
          {
              text: "Proactively engage potential mentors.",
              resources: []
          },
          {
              text: "Discuss potential project ideas based on your contributions and understanding.",
              resources: []
          },
          {
              text: "Ask specific, valuable questions. Get early feedback on your GSoC project idea.",
              resources: []
          }
      ]
  },
  {
      id: "2025-12-26",
      date: "Dec 26 - Jan 1",
      tasks: [
          {
              text: "Continue working on substantial contributions.",
              resources: []
          },
          {
              text: "Monitor the GSoC Official Website for program announcements and timeline release.",
              resources: [
                  { text: "GSoC Official Website", url: "https://summerofcode.withgoogle.com/" }
              ]
          },
          {
              text: "Keep refining your potential project ideas with mentor feedback.",
              resources: []
          }
      ]
  },
  {
      id: "2026-01-02",
      date: "Jan 2 - Jan 8",
      tasks: [
          {
              text: "*Mid-January 2026: Official GSoC 2026 Program Announcement & Timeline Release.*",
              resources: [
                  { text: "GSoC Official Website", url: "https://summerofcode.withgoogle.com/" }
              ]
          },
          {
              text: "Confirm your understanding of the official timeline.",
              resources: []
          },
          {
              text: "Continue with contributions and mentor engagement.",
              resources: []
          },
          {
              text: "*Late January 2026: Organization Applications Open.*",
              resources: []
          }
      ]
  },
  {
      id: "2026-01-09",
      date: "Jan 9 - Jan 22",
      tasks: [
          {
              text: "Continue to work on substantial contributions (aim for your 1-2 substantial merged PRs).",
              resources: []
          },
          {
              text: "Keep engaging with mentors and refining your project idea based on their feedback.",
              resources: []
          }
      ]
  },
  {
      id: "2026-01-23",
      date: "Jan 23 - Jan 29",
      tasks: [
          {
              text: "Ensure your substantial merged PRs are completed.",
              resources: []
          },
          {
              text: "Continue active communication and idea refinement with potential mentors.",
              resources: []
          },
          {
              text: "*Mid-February 2026: Organization Application Deadline.*",
              resources: []
          }
      ]
  },
  {
      id: "2026-01-30",
      date: "Jan 30 - Feb 5",
      tasks: [
          {
              text: "*Late February 2026: Accepted Organizations Announced.*",
              resources: [
                  { text: "GSoC Official Website", url: "https://summerofcode.withgoogle.com/" }
              ]
          },
          {
              text: "Confirm your target Python-based organization(s) from the officially accepted list.",
              resources: []
          },
          {
              text: "If your primary choice isn't accepted, pivot immediately to your backup.",
              resources: []
          },
          {
              text: "Review their official GSoC idea list. Select 1-2 organizations and projects to focus on for proposal writing.",
              resources: []
          }
      ]
  },
  {
      id: "2026-02-06",
      date: "Feb 6 - Feb 26",
      tasks: [
          {
              text: "Begin structuring your proposal according to GSoC guidelines.",
              resources: [
                  { text: "GSoC Student Guide", url: "https://summerofcode.withgoogle.com/rules/for-students" }
              ]
          },
          {
              text: "Craft a compelling Title & Abstract.",
              resources: []
          },
          {
              text: "Include your Information (contact, GitHub, location/timezone).",
              resources: []
          },
          {
              text: "Write a Detailed Problem Statement.",
              resources: []
          },
          {
              text: "Share early drafts with potential mentors for feedback.",
              resources: []
          }
      ]
  },
  {
      id: "2026-02-27",
      date: "Feb 27 - Mar 5",
      tasks: [
          {
              text: "Develop a Detailed Proposed Solution (Technical Deep Dive - Python Development Focus).",
              resources: []
          },
          {
              text: "Include Architecture & Design (diagrams).",
              resources: []
          },
          {
              text: "Provide Technical Breakdown (specific modules, algorithms, data structures).",
              resources: []
          },
          {
              text: "Detail AI/ML Specifics (if applicable).",
              resources: []
          },
          {
              text: "Detail Software Development Specifics.",
              resources: []
          },
          {
              text: "Send this section to mentors for critical feedback.",
              resources: []
          }
      ]
  },
  {
      id: "2026-03-06",
      date: "Mar 6 - Mar 12",
      tasks: [
          {
              text: "Discuss Alternative Approaches and justify your chosen solution.",
              resources: []
          },
          {
              text: "Detail the Impact on Existing System.",
              resources: []
          },
          {
              text: "Start drafting your Detailed Weekly Timeline (initial breakdown of coding period tasks).",
              resources: []
          },
          {
              text: "Seek mentor feedback diligently.",
              resources: []
          }
      ]
  },
  {
      id: "2026-03-13",
      date: "Mar 13 - Mar 19",
      tasks: [
          {
              text: "Refine the Detailed Weekly Timeline to be extremely granular (including Community Bonding period).",
              resources: []
          },
          {
              text: "Define your Test Plan (unit/integration tests, Python testing frameworks, ML testing strategies).",
              resources: []
          },
          {
              text: "Write your 'About Me' section, highlighting strengths (Java DSA, math aptitude, learning pace) and *crucially* listing pre-GSoC contributions with direct links to merged PRs/commits.",
              resources: []
          }
      ]
  },
  {
      id: "2026-03-20",
      date: "Mar 20 - Mar 26",
      tasks: [
          {
              text: "Add 'Benefits to the Organization' and 'Future Work/Maintenance Plan'.",
              resources: []
          },
          {
              text: "Review for Clarity & Conciseness.",
              resources: []
          },
          {
              text: "Ensure Professionalism (grammar, spelling, formatting).",
              resources: []
          },
          {
              text: "Perform a thorough self-review and get a trusted peer to review for clarity and errors.",
              resources: []
          }
      ]
  },
  {
      id: "2026-03-27",
      date: "Mar 27 - Apr 2",
      tasks: [
          {
              text: "*Late March 2026: Contributor Proposals Open.*",
              resources: [
                  { text: "GSoC Official Website", url: "https://summerofcode.withgoogle.com/" }
              ]
          },
          {
              text: "Send final drafts of your proposal to your potential mentors. Incorporate their feedback diligently.",
              resources: []
          },
          {
              text: "**Early Submission:** Aim to submit your proposal at least 24-48 hours before the absolute deadline (historically around April 8th).",
              resources: []
          },
          {
              text: "Account for time zone differences (IST considerations) and last-minute tech issues.",
              resources: []
          }
      ]
  },
  {
      id: "2026-05-01",
      date: "May 1 - May 28",
      tasks: [
          {
              text: "Formalize your development environment and gain access to organization resources.",
              resources: []
          },
          {
              text: "Have in-depth discussions with your mentor to clarify any ambiguities in your project plan and set detailed weekly goals.",
              resources: []
          },
          {
              text: "Set up regular communication channels (e.g., weekly video calls, daily chat updates).",
              resources: []
          },
          {
              text: "Begin preparatory tasks: setting up test environments, reading more code, writing initial documentation.",
              resources: []
          }
      ]
  },
  {
      id: "2026-05-29",
      date: "May 29 - Aug 18",
      tasks: [
          {
              text: "**Rigorous Adherence to Timeline:** Strive to meet your weekly milestones.",
              resources: []
          },
          {
              text: "**Consistent Communication:** Daily short updates on progress, current work, blockers. Weekly detailed reports (progress, challenges, solutions, next plan). **Never go silent.**",
              resources: []
          },
          {
              text: "**Clean Code & Tests:** Write high-quality, well-documented Python code. Write comprehensive unit and integration tests as you go.",
              resources: []
          },
          {
              text: "**Regular Commits & Pull Requests:** Push code frequently with clear, descriptive commit messages. Create PRs for mentor review regularly.",
              resources: []
          },
          {
              text: "**Seek Help Proactively:** If stuck for more than a few hours, reach out to your mentor.",
              resources: []
          },
          {
              text: "**Be Flexible:** Adapt to evolving requirements. Ensure your mid-term deliverable is met.",
              resources: []
          }
      ]
  },
  {
      id: "2026-08-19",
      date: "Aug 19 - Aug 25",
      tasks: [
          {
              text: "Final documentation, code cleanup, final bug fixes.",
              resources: []
          }
      ]
  }
];

function App() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 20));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [taskCompletion, setTaskCompletion] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem('gsocTaskCompletion');
    if (saved) {
      setTaskCompletion(JSON.parse(saved));
    }
  }, []);

  const saveTaskState = (taskId: string, completed: boolean) => {
    const newState = { ...taskCompletion, [taskId]: completed };
    setTaskCompletion(newState);
    localStorage.setItem('gsocTaskCompletion', JSON.stringify(newState));
  };

  const getTasksForDate = (dateStr: string) => {
    // Modify to handle date ranges
    const targetDate = new Date(dateStr);
    targetDate.setHours(0, 0, 0, 0); // Normalize to start of day

    return allDailyTasks.filter(taskEntry => {
      if (taskEntry.id === dateStr) {
        return true;
      }
      if (taskEntry.id.includes(' - ')) { // Handle date ranges in the 'date' field
        const [startMonthDay, endMonthDay] = taskEntry.date.split(' - ');
        // Construct full start and end date strings for comparison, assuming the same year as targetDate
        const startFullDate = new Date(`${startMonthDay} ${targetDate.getFullYear()}`);
        const endFullDate = new Date(`${endMonthDay} ${targetDate.getFullYear()}`);

        // Handle year transition for ranges like Dec 26 - Jan 1
        if (startFullDate.getMonth() > endFullDate.getMonth()) { // e.g., Dec to Jan
            endFullDate.setFullYear(targetDate.getFullYear() + 1);
        }

        startFullDate.setHours(0, 0, 0, 0);
        endFullDate.setHours(0, 0, 0, 0);

        return targetDate >= startFullDate && targetDate <= endFullDate;
      }
      return false;
    });
  };


  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
    setSelectedDate(null);
  };

  // Calculate progress metrics
  const calculateProgress = () => {
    let totalTasks = 0;
    let completedTasks = 0;

    allDailyTasks.forEach(dayEntry => {
        dayEntry.tasks.forEach((_, taskIndex) => {
            const taskId = `${dayEntry.id}_0_${taskIndex}`; // Assuming dayIndex is always 0 for simplicity if each dayEntry represents a single block
            totalTasks++;
            if (taskCompletion[taskId]) {
                completedTasks++;
            }
        });
    });

    const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    
    // Calculate streak (consecutive days with at least one completed task)
    let currentStreak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date
    const startDate = new Date(2025, 5, 20); // GSoC plan start date
    startDate.setHours(0, 0, 0, 0);

    for (let d = new Date(today); d >= startDate; d.setDate(d.getDate() - 1)) {
        const dateStr = formatDate(d);
        const dayEntries = getTasksForDate(dateStr); // Get all task entries for this specific day
        
        let dayHasCompletedTask = false;
        for (const dayEntry of dayEntries) {
            for (let i = 0; i < dayEntry.tasks.length; i++) {
                const fullTaskId = `${dayEntry.id}_0_${i}`; // Construct task ID
                if (taskCompletion[fullTaskId]) {
                    dayHasCompletedTask = true;
                    break;
                }
            }
            if (dayHasCompletedTask) break;
        }
        
        if (dayHasCompletedTask) {
            currentStreak++;
        } else if (d < today) { // Only break if there are no tasks completed on a previous day (not today itself if today is not completed yet)
            break;
        }
    }


    return {
      totalTasks,
      completedTasks,
      completionRate,
      currentStreak
    };
  };

  const progress = calculateProgress();

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];

    // Empty cells for previous month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day other-month"></div>);
    }

    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDate(new Date(year, month, day));
      const dayTasks = getTasksForDate(dateStr);
      const hasTask = dayTasks.length > 0;
      const isSelected = selectedDate === dateStr;
      
      // Check if day has completed tasks
      const hasAnyCompletedTaskForDay = dayTasks.some(dayEntry =>
          dayEntry.tasks.some((_, taskIndex) =>
              taskCompletion[`${dayEntry.id}_0_${taskIndex}`] // Assuming dayIndex is always 0 here for consistency
          )
      );

      days.push(
        <div
          key={day}
          className={`calendar-day cursor-pointer transition-all duration-300 hover:bg-slate-100 ${
            hasTask ? 'has-tasks bg-slate-50 border-slate-200' : ''
          } ${isSelected ? 'selected bg-slate-800 text-white' : ''} ${
            hasAnyCompletedTaskForDay ? 'has-completed border-emerald-300 bg-emerald-50' : ''
          }`}
          onClick={() => setSelectedDate(dateStr)}
        >
          <span className="text-sm font-medium">{day}</span>
          {hasTask && !isSelected && (
            <div className={`w-1.5 h-1.5 rounded-full mt-1 ${
              hasAnyCompletedTaskForDay ? 'bg-emerald-500' : 'bg-slate-400'
            }`}></div>
          )}
        </div>
      );
    }

    return days;
  };

  const selectedTasks = selectedDate ? getTasksForDate(selectedDate) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
        <div className="relative container mx-auto px-6 py-20 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <Trophy className="w-10 h-10 text-amber-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            GSoC 2026 Blueprint
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Your strategic roadmap to Google Summer of Code success, leveraging your Java DSA expertise while building Python AI/ML specialization
          </p>
          
          {/* Progress Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-emerald-400">{progress.completedTasks}</div>
              <div className="text-sm text-slate-300">Tasks Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400">{progress.completionRate.toFixed(1)}%</div>
              <div className="text-sm text-slate-300">Progress</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-amber-400">{progress.currentStreak}</div>
              <div className="text-sm text-slate-300">Day Streak</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-slate-300">{progress.totalTasks}</div>
              <div className="text-sm text-slate-300">Total Tasks</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Progress Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Progress Dashboard</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Track your journey towards GSoC success with detailed metrics and insights
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-slate-200">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-slate-700">Overall Progress</span>
                <span className="text-2xl font-bold text-slate-900">{progress.completionRate.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress.completionRate}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-slate-500 mt-2">
                <span>{progress.completedTasks} completed</span>
                <span>{progress.totalTasks - progress.completedTasks} remaining</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{progress.currentStreak}</div>
                <div className="text-sm text-slate-600">Current Streak</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{Math.ceil((progress.totalTasks - progress.completedTasks) / 7)}</div>
                <div className="text-sm text-slate-600">Weeks Remaining</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {progress.completionRate >= 75 ? 'Excellent' : progress.completionRate >= 50 ? 'Good' : progress.completionRate >= 25 ? 'Fair' : 'Getting Started'}
                </div>
                <div className="text-sm text-slate-600">Performance</div>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Starting Arsenal</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              You're beginning from a position of strength. These are your key competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, value: "3", label: "Fluent Languages", desc: "C, Core Java, Python", color: "slate" },
              { icon: Target, value: "150+", label: "LeetCode Solved", desc: "Solid CS Fundamentals", color: "emerald" },
              { icon: Clock, value: "25", label: "Hours / Week", desc: "Initial Commitment", color: "blue" },
              { icon: Trophy, value: "1", label: "Primary Goal", desc: "GSoC 2026 Success", color: "amber" }
            ].map((kpi, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${kpi.color}-100 rounded-xl mb-4`}>
                    <kpi.icon className={`w-6 h-6 text-${kpi.color}-600`} />
                  </div>
                  <div className={`text-4xl font-black text-${kpi.color}-600 mb-2`}>{kpi.value}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{kpi.label}</h3>
                  <p className="text-sm text-slate-600">{kpi.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phase Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Roadmap</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four carefully crafted phases to transform your potential into GSoC success
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "Foundational Dominance",
                period: "June 2025 - October 2025",
                description: "Master advanced DSA in Java while building robust Python AI/ML foundations",
                color: "slate",
                icon: BookOpen,
                highlights: ["Advanced Graph Algorithms", "Dynamic Programming", "Python ML Stack", "Testing & Quality"]
              },
              {
                phase: "Phase 2", 
                title: "Open Source Contribution",
                period: "November 2025 - February 2026",
                description: "Become a recognized contributor to target Python organizations",
                color: "emerald",
                icon: Users,
                highlights: ["Strategic Contributions", "Mentor Engagement", "Community Building", "Technical Reputation"]
              },
              {
                phase: "Phase 3",
                title: "The Unassailable Proposal", 
                period: "March 2026 - Early April 2026",
                description: "Craft a technically robust, mentor-approved winning proposal",
                color: "blue",
                icon: Target,
                highlights: ["Technical Deep-Dive", "Granular Timeline", "Mentor Feedback", "Proof of Competence"]
              },
              {
                phase: "Phase 4",
                title: "Execution & Communication",
                period: "May 2026 - August 2026", 
                description: "Deliver exceptional code with transparent, proactive communication",
                color: "amber",
                icon: Zap,
                highlights: ["Quality Code", "Regular Updates", "Continuous Testing", "Proactive Help-Seeking"]
              }
            ].map((phase, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-${phase.color}-100 rounded-2xl`}>
                        <phase.icon className={`w-8 h-8 text-${phase.color}-600`} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <span className={`inline-block px-3 py-1 bg-${phase.color}-100 text-${phase.color}-800 text-sm font-semibold rounded-full mb-2`}>
                            {phase.phase}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">{phase.title}</h3>
                          <p className={`text-${phase.color}-600 font-semibold mb-2`}>{phase.period}</p>
                        </div>
                      </div>
                      <p className="text-slate-700 mb-4 text-lg">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.highlights.map((highlight, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Calendar */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Daily Action Plan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Interactive calendar with detailed daily tasks and progress tracking
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto border border-slate-200">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <h3 className="text-2xl font-bold text-slate-900">
                {currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <button
                onClick={() => navigateMonth('next')}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-8">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-3 text-center font-semibold text-slate-600 text-sm">
                  {day}
                </div>
              ))}
              {renderCalendar()}
            </div>

            {/* Task Display */}
            <div className="border-t border-slate-200 pt-8">
              {selectedDate ? (
                selectedTasks.length > 0 ? (
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-slate-600" />
                      Tasks for {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </h4>
                    {selectedTasks.map((dayTask, dayIndex) => (
                      <div key={dayIndex} className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 mb-6 border border-slate-200">
                        <div className="space-y-6">
                          {dayTask.tasks.map((task, taskIndex) => {
                            const taskId = `${dayTask.id}_${dayIndex}_${taskIndex}`;
                            const isCompleted = taskCompletion[taskId] || false;
                            
                            return (
                              <div key={taskIndex} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                                <label className="flex items-start space-x-3 cursor-pointer group">
                                  <button
                                    onClick={() => saveTaskState(taskId, !isCompleted)}
                                    className="flex-shrink-0 mt-0.5"
                                  >
                                    {isCompleted ? (
                                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    ) : (
                                      <Circle className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                                    )}
                                  </button>
                                  <div className="flex-grow">
                                    <span className={`text-slate-800 ${isCompleted ? 'line-through text-slate-500' : ''} group-hover:text-slate-900 transition-colors block mb-3`}>
                                      {task.text}
                                    </span>
                                    {task.resources && task.resources.length > 0 && (
                                      <div className="flex flex-wrap gap-2">
                                        {task.resources.map((resource, resIndex) => (
                                          <a
                                            key={resIndex}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors border border-slate-200 group"
                                          >
                                            {resource.text}
                                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">No tasks scheduled for this date</p>
                  </div>
                )
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Select a date to view daily tasks</p>
                  <p className="text-sm text-slate-400 mt-2">Look for dates with dots - they have scheduled activities!</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Success Mindset */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white border border-slate-700">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h2 className="text-3xl font-bold mb-4">You Have Everything You Need</h2>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
              With your strong Java DSA foundation, mathematical aptitude, and this strategic plan, 
              you're positioned for GSoC success. The path is clear, the resources are ready.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-xl">Now Execute With Confidence!</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
