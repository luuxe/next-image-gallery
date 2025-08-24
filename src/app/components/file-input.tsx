export const FileInput = () => {
    // TODO: handle file upload
    return (
       <form>
        <input type="file" name="file" accept="image/*" />
        <button type="submit" style={{ padding: '1px 4px'}}>Upload</button>
       </form>
    );
}