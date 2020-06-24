/**
 * Helper type for objects that are keyed by unknown strings, i.e.
 * {
 *   'id1': {
 *     some: 'thing',
 *   },
 * }
 */
type Dictionary<K extends string, T> = Partial<Record<K, T>>;
