// Find in width, in graph with dijkstra algorithm

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
  const costs = {}
  const processed = []
  const neighbors = {}
  Object.keys(graph).forEach(node => {
    if (node !== start) {
      let value = graph[start][node]
      costs[node] = value || 10000000000
    }
  })
}

shortPath(graph, 'a', 'g')
