

module.exports = function (template, product) {
    let out = template.replace('{{%Image%}}', product.productImage);
    out = out.replace('{{%Name%}}', product.name);
    out = out.replace('{{%ModelName%}}', product.modeName);
    out = out.replace('{{%Number%}}', product.modelNumber);
    out = out.replace('{{%Size%}}', product.size);
    out = out.replace('{{%Camera%}}', product.camera);
    out = out.replace('{{%Price%}}', product.price);
    out = out.replace('{{%Color%}}', product.color);
    out = out.replace('{{%id%}}', product.id);
    out = out.replace('{{%rom%}}', product.ROM);
    out = out.replace('{{%description%}}', product.Description);


    return out;

}