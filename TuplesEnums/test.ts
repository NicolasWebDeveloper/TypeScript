const testTuple: [number, number, number] = [1, 2, 3];
type HTTPResponse = [number, string];

enum Status {
  PENDING = 1,
  SHIPPED = 2,
  DELIVERED = 3,
  RETURNED = 4,
}

const myStatus = Status.DELIVERED;
