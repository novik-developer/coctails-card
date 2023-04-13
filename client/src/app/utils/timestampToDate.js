export function timestampToDate(ts) {
    const d = new Date();
    d.setTime(ts);
    return (
        ("0" + d.getDate()).slice(-2) +
        "." +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "." +
        d.getFullYear()
    );
}
