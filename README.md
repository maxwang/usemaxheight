# UseAutoMaxHeight

This is a simple react custom hook which set element max height based on view point. Demo use react-table creating a big table and useAutoMaxHeight hook

## Dependency

UseAutoMaxHeight use Loadsh debounce

## Usage

```typescript
const ref = useRef<HTMLDivElement>(null);

useAutoMaxHeight(ref);


...
<div ref={ref}>

```

### Options

```typescript
interface UseAutoMaxHeightProps {
    minHeight: number;
    wait: number;
}
```

Default value:
minHeight: 250
wait: 1000 (1 second)

You could call with:
`useAutoMaxHeight(ref, {minHeight: 200});`
