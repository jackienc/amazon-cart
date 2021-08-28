import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEhUQEBAQEBUVFhAVFQ8QFRAQFRAVFRUWFhUVFhYYHSggGBolHRUVITEhJSkrLy4uFx8zODMsNygtLisBCgoKDg0OGhAQGyslHR0tLS8tLS0rLS0vLS0tLS0tLS4tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYHAf/EAEoQAAEDAgIDCwcJBgUFAQAAAAEAAgMEERIhBQYxBxMiMkFRYXFysbIUU3OBkaHRIzNSkpOjwdLTFkNUgoOiCBUXQvBiY2TD8TT/xAAaAQACAwEBAAAAAAAAAAAAAAAABAECAwUG/8QANREAAgIBAgQEBQMBCQEAAAAAAAECEQMSIQQxMlEFE0FhInGRsdEzgfDBBhQVUoKhsuHxI//aAAwDAQACEQMRAD8A9xREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQARFg94AJJAAzJOQAQBmirxpG/FilcPp4QAfx9y+HSDuSCQ+to71XXEv5cuxYoq/y9/mJfaz4qNUabwcaCXMgAAsJcTsAANyVGuIeXLsXKKBDVyOFzA9nQ50V/cSt2/u82faz4q1la/lklFH393mz7W/FN/P0D7W/FFhRIRR9/P0D7W/Ffd/P0D7W/FFhRvRaN+P0D7W/FN+P0D7W/FFhRvRaN/P0D7W/FfN/P0D7W/FFhRIRR9/d5s+1nxXzyh3m3e1nxRYUSUUTyh3mnfWZ8U8pf5p31mfFFhXy+pLRQ/KX+Zd9aP4rNlS7/dG5vTdh7iiwokosWm+YWSkgIiIAIiIAIiIAKu0vmI2cjpWgjnADnd7QrFV2ldsPpR4Hj8VSfSy+PrRXazaY8jpZqrezLvTcW9tOHFmALmxwtF7k2yAJUHUnWR1fTeUOi3kh74y0O3xpLbHEx1hcZ22ZEEciv3AHI59B5ViyNrQGtAaBsa0AAdQCzs2rc+vdkq+gbjnLjngYbdBcQL9dgR/MVOl2KHof52Tst7yiPUiZdDLhFUac1jpqQsbOZLyB5aI43yEhmHEThGXHaq79vKDL/8ATmSB8hLmRe4GWZyPsKZUZPkn9BNyiubOoRcx+3tB/wCT9hL0dHSFqO6Jo36cv2UnwU6J9n9GR5kO6+p1iLk/9Q9G/Tl+yk+CHdE0b9OX7KT4I8uf+V/QPMh3X1OsWqrmLGPe1jpS1rnCNmHFIQLhrbkC52Zlcx/qNozzkv2UnwWB3SNF+cl+yk+CNEuz+ga49zrInEtBLS0kAlrrXbcXsbZXCzXIf6laL85L9lJ8F9/1K0X5yX7KT4I0S7P6E6l3OuRciN0jRfnJfspPgvp3RtGecl+yk+CjS+wal3OtRcRLur6GYbOnlH9CY9zUp91bQ0jgyOaZ7jezWwVBJsLnINUFqZ26Lj4d0nRr8IZ5W8vthDaSqcX32YbMzv0K80HrBT1ZkEO+h0LmtkZNFLA9hcMTQWyAHZmgCxp3nfHt5MMbvWS8HwhS1Dg+dd2IvFIpiqiX+PsERFJAREQAREQAVfpR1t66ZWj3OVgq/Srb730SNPuKrPpZfF1o+Ivi+LAYMZdii6H+ck6m95UqXYouhvnJOpvepj1IJ9DOH3Zb46S2XBqtnXCvPQTzn2lei7sQ4dL2anvhXn7WLtcP+mjhcR+owHu+k7k5TyWt3D2IGrqNFaqOmjbIHPNwHWjYHBt8wCb7bKJpbQm8Brg8uBNrFtiDn057CFSPG4JT8tS3uuT5r3oUWaDlpvn7P71RTBi2CNbWxq71a0B5W94MhjaxoLi1hkcbmwAaPXn0LaUlFWxqMXJ0jn3QArRJSL0p25621mVMuL/aHwSNbfkueQdK4YtPKFnDJGfSzaWKeOlNUUMtK4KK9rguj3nEQ0bSQB1k2C6ebUmkEm8urHF97HDCLNOV7Xdwto2LDPxGLBHVlkku7NcOGeVtQV0eZiUrayddFrhqwKKVrBJvrXsD2vw4Da5BBFznl71zVTDZpIV4zjKOpO09wUHdFDpWXE/LYFCbcZg26Rku61X1Mp6mB9XV1raSMPexoLWkuLGhzjm4ch2C5yUnS+odGKSSqotItqd7BcYy1rbtBAdsdcEX5Rn60hK22zpwcI1GzgWVEgthkeLbLOcMPVnkvb/8PkjnQ1jnuc4mWG7nEuJ4DtpK8Pwr2/8Aw9D5Cr9LD4HKIvctxEKhZ6tF847sR+KRTFFi47uzH3vUpWQm/wABERSQEREAEREAFW6X/c+lb4Hn8FZKt0vth9K3wPVMnSzTF1o+IhWN1gMmMuxaNC8eT+VbpTktGhOPJ6lMOpFZ9DON3XBeSl7NT3wrhWsXfbq4+UpexU+KFcUxi7XD/po4mf8AUf7HZ6sa3NpoGwmIPsGZh+C3BAtax5veqvWTTZqgwFgZhOwOvcEOsevhWVZDJYWwsPS5oJ/58Fk7hW4LR2Ra/WlYcG45FLW6TuqX3FVjybJzbivSl+2/sR2xrsdzqWJskrJHNbjY0AOOEOsTcX9ezrXMtjW+JtjewPQRcJya1RoZg9Mkz0agdFEWOk3tgjiY0yh8RxERta65xYsIw2AttF+ZeYYArB1jfgRi/KGgEdS0+T8yyx49HqaznrrYixMaHtcdgc0nqBBXQac1efJUGeGaMskPHEkRxNxNdmTsOR4XRbYVQzwPGxVlTUlosY4za/GYCc+nlVckYy6kmvdWb4XPTKEW0pKnXbsWG6TIzfYI2yMkdHDaTAQ4Nc57jhuMtnJ0riap5wrdUTi5NgMybDIDqCra2ovkPasHpxY1FenIf4fhnJpF9oKIT0rIhNEx0VRLIWyEi4e1oBHs29CkVNKKeKoe+ojfvlO6BoDi97i57XZkgX2ey3MuSpZMBvgjfla0jcQ23v15LZUz4wBvcbLcsbAwnrSnm7Dv+Ht5NV7cyvwL2v8Aw/i0NX6SHwOXjwiXs24Q20VT6SHwuUQfxF+PxOOG/dHp8XHd2Wd7lKUePjO6m97lIWyOMwiIpICIiACIiACrdMbYfTDwPVkqzTP7n0zfA9UydLNMXWjAlfEJXwlLjR8l2LVoPjSepZyHJa9CcaT1KYdSIydDOU3UR8pTdip8UK5BjF2e6YPlabsVPihXJsYuzgfwI4uZfGy+oNXGOjY98xaXtxBoANgc+U8y06W0Q2HCWvxg84tz/BW9O1skMWGSO7WBpDnYSDYNPco+nrYY2hwdYZ4SDz5pZZp+ZTurNpYoaLVXt3/llGxi11UkodHFBEJZJXFoxu3tjABdz3vsbAZdZIG2wUxrFi7SJpZoZyyR0d3xyuiY6V0TH4TjwN4wuyx28a9jaxYnNqLoyhBalZs1g0ZXUcJqXRRTMZnK1j3NkawAEuYCLOtcmxIPBOSzaxWWtWtcDaSSGlEtTLM17I42tmfwntaLudkI2AuJsbCzSLWKiRsWWLJJ3ZrPGlyNJhvkpbNVI5XujdKW54QQ0cI4Gu5Tlxj7F9jbmD0hWTaF0YfK2aOUu4TW4jd5xl2I3PGDSGgDka3mVM0paW4Ve1Lvcl6vZVG+frRaMWkmu/8AR7d93R5hrfq95LIGEkhzcQuLEZkEW9W1clLHmvSNfKl0xYZCHOay2WxvCJz6fiuDfFmkcs2kk3v+3f2tfuj1HhWBzxKTOr1L1Biq6d9VPUGBjXljQ1oeXEAEnM9NgAp2m9zmCKmkqIKmSR0TQ50UjBGcJNjmDkdp5dnSr3c5mhNDvW+wskZUOkwzPDOC5gAIvyH8FcazVMTKSpL5qZ7pI2sY2J+NxNzcAbeY+pKOeTzUlH4K3f7P39qr3LN5VncE31JJUuVpcq3VO7PDmwL13cUZaKp7UPc9eZ70vUtx8Wjn7UHdItcErmh7xrAocG37r7nokfGPU3vct60R8Y9Te9y3p1HjWERFJAREQAREQAVXpr9z6YeB6tFV6b/c+mHgeqZOlmmLrRrK+XXwlY3Sw4YynJYaC40nqWUpyWGgDwpP5VbH1Ipl6GUG6OPlafsVHihXKtYus3QR8rT9io8UK5trV1MbqJy5x+IyhdYWwtPaaCtxz5GjsgBW9FoEuY153zhAEYWEix2Z8qx0hooxAO4dibcNpbnt/ApZcdilk8tar5dE0vq1X+9e5ouHkle31RWsYtzWo0Kx0TQCVxBcWgYc2tLjdxsMubpW0siirZZYWyG5xOVmjqFkAXTu1WbbKU35LhtvXmuauqOZriw6+RkvhksOK09oArVJOACSdl7+peendDkecLaVoDiALvcXWJFsg3bms7cnSHdGPCk8jpb9/TnyLHWGW7sIVCI19p9ImoBlLMJxWte4tbFkVm1czLJuTs9xwGLG8EJQ3TVmcDiwh3Bda+RAcMxbMHrW+onL7GwFvogNv122qZRaKc+GWYNe4tfA1kbQD5QZHAPY03u1wFjiLcIvmRnaxrtX2RmpIMmGEw4JHNGCXGOFHkc3t5XtxM5yCCoWGbWqtjKfi3BY8/kufxp6eT59uVHPshJ2Bem7k0Za2oB54D7pF58xwC9F3LXXFR/Q7pFpw6qYt4/J/wBzkveP3O7j4x6h3uW9aI+Meod7lvT6PCvn9AiIpICIiACIiACqtOfufSjwPVqqnTv7n0zfA9UydLNMXWjQSvl0cVgSlR1HyU5Jq/x5P5VjIcl91e48n8qvj60Vy9DKXX8/Kwdio8UK5trlfbo77S0/YqPFCuS8pTeutimDhnkjqPVNBaQh8niG+xghjWkF4aQQLHIqv1vrYnRsa17HHHezXY7ANcLnm2hcDFXYeRpv9IB3ejqy5vkOgAAexZ6xiHh0tVlqJFdauTsxOa5zW33si797Bwuuc+U9HKuRFWt8VbbmPQQHD3qvmdmOS8N1wcX6nqz9IQAXMsVhmeGz4rzh0qif5hyYWfVbdR5qmwUOdm3DeG+Vd72VGla5+IhvLdpHIRyFcbRvc0hrafAQ5puGyXache5JvkTt6+QLrdIsyxcpUaCtc0ABsZtfNzWOOZucyonm8trY6PEeER4yMfia02tvf/wrqASvZiLMPCFm2wC1hchvJc3PWStoYRkRZSC4k3J2knLIDqHIEbHz3Ss3GbtHX4TC+Gwxwp2oqvc67VWrYIAzG1pD3GznNac2tF8+kKbpisYIn8NpxNLbNc1xJOQ4IXH0gc03bh6rBw9hUyez+M1oOfFAbe/VtT+LNJ4vLUVyq7Z5Tif7K8Pk8RfGyyS3mptJLmmnV9tvUqWi69L3K22ZP/Q7pFwwoW8lx71325nEWtnB/wCx/wCxL4sE4St8jq+PZYz4OSXdfc7ePjHqHe5b1Hi2nqb3uUhMo8Q+f0CIikgIiIAIiIAKp09+59M3wPVsqfWD9z6ZvgeqZOlmmLrRHcc1gSjjmsbpUeEhyXzVzjyfyrGQ5LLVo8OX+X8VbH1opm6GcvurSYZKfsVPfCuE8oXa7sJ4dN2anvhXneJTmlUju+E4NXCxfz+7Om0Zox8xa1pJc/YB1E9wUWui3sB1zmbZ5K81T1kFMzNxeMIAiLsDceV3EHMEAcgzuqvXHSvlDy/ETmSxpIJaLHgZZAAm3TtXVz8LjjglNJVpTTvm9vv+asYw+Y+I8tw+Hv8Af0/r6bWVranpVho+0l8zYWyG0nLZ7VzoCt9XpWNf8q3EwnNoJaSMjzix28q5nBaMnEQjPpd39G0vTm6XNGnjMM+LgMs+Gf8A9ElTq6uSTdU+SbfJ1zL+s0cIw0m4xgObwmOyOwmwy5fYuSnrZMRztYkW6l12kNPsmjcH07GuGAxlr38DMB/+7MYWiw2DDszuuLdxndbu9N+LYMeFY9CpvVdO+WmvV932s5n9ks/G55Z/71KUorRocoaXb16l0x7Rdb0mu5KfUOfYWtew9ZyXWU+oz3Na4CQ49hGAA5E8vFGR2rj4NoPMQfYV6dRa4CONrMMbsAGF2MC5zFyL9K4OealJeZOUVT5K7e3s/S+370d3xGfE4YxXCrvf82OF0xos08m9m57Vrg3sQbZKNBDcq31lrxPOZchfMgHEBcnK6gsw5W2pvhMeuC1Pl32b7fvVdvkjbHkm8UXPqa3+Za0dBDvYe97i5zi1kbcIJw4cTnOOwXc0WAJzyBX2mhppGOMbnte1uMNNnskbexwuwtN+sWOdr2NoNVAXsAN3DhhzGnC4hzcN2m45C72g52sc9CUsgPCaWi73Zhl3OdjubtaMrPdtHNtzJ6SVOkeW4jjOLjxbim9OrlW1be39SVFTrstRY8JnHRB/7VTU9Mul1XjwvlH/AEwd8y0nyL+KZ9WFx919y/j4zuyzvepKixcd3ZZ3uUpYI88/wERFJAREQAREQAVPrFsh9M3wPVwqfWLZD6ZvgkVMnSzTF1oguOaxJX1xzWJKUHz5Kcl91ZPDl6m/itUpyWzVc/KS9Te8q+PrRnm6GcruwDh03ZqPFAvPMK9I3WY8UlN2ajxQLzx8dlnxH6jPW+AqL4KH+r/kzYKt2HDZhsLAljSQOu1//qVFW5+0MGd7hgYeXlAvy+4LRZMJ/wDqw0nZ8uK3o+LbTzFpuA09BAIPqKxMZWOFQ0y7SexMfpB5FsMduFsjble+zLLb7gozGrFoW1imMbM3UTYxinwVTmi2GM7c3Ma857cyFBa5Zhyax4hTLlT5m0lfY3WWoFbWBdDHhEp5ixpKgjmN+cA96uqWqxWBDR1AN9tlz0TVZUstuf1JpYnQrmyQSuTo6uiivnZXWhW2kl7FP4plQaIrza29HtOP4BdDoZ15JNnEg2dqZYZItLc83xeZTtJlrFxndlniepKixcd3Zj73qUl0JMIiKSAiIgAiIgAqbWTZD6ZvgerlUusuyH0zfA9UydLNMXWivcc1iSjjmsCUoPnyU5LbqqflJepveVHlOS26qH5SXqb3lXx9aM83Qyt3RIMcsHQyo8UK4eroLL0XXEjfob+bn8US4fSuk4GktxBx5mm9ltPHqZ1PCeLlDHGC9/uUEkNjmvpdYZLGaqLiteJLrG4nqoZlJbnxzyta+uKxuq+U3zLPOkfQsw5arr6CncXDOjnZuMinzNwcs2lamlZb7zJ7HgrmcziPEMcFciU1bGv5lHpoXPKv9H6L50ylGJ5zjPHZLaG33IdNA9y6HR2jedbYIGtVlTvVZTZ5zL4jkyO7J1HTgBWeiWgSyWFuBB4plAgcp+iT8rL2KfxTJXKthrhM8pvS2WUfzjuxH4pFLUOL5x3Yj8UimJVHSf4CIikgIiIAIiIAKk1n4sPpm+CRXapNaOLD6ZvgkVMnSzTF1oq3HNayV9cc1gSlDoHyU5LfqkflJepneVFkOSk6oH5Wbss7yr4+tGeboZy27TVPY6lDXFuJtSDbK4BhyXlwnsvRt3h9nUfVVd8K8pL108a+Eph4jy4JIsm1ZClU1QX5NDnHmaC7uVHcr1bc8pwKSPC3hSGUm2Re4SOa256gB6lGXTGLk/Q1/wAWlii5N7L9zjt6k83J9V3wXzeJfNyfUf8ABe0Vuh5I2GQnEALuDS0EDlOYzULfImRullxHNrWsacOIkE3JscviowTU5aYxd7bNdysvHotSc00oq3fb9r+Vc7PJfJ5fNyfUd8FthpX34UctsuK032i+0c1/XZepaProJS5lnMfhcWnFjaS0YsBFtth/zlhPFbLK6OmYxwZguXkC5cCcrkcgOXQU7GEnJxdKvVvbnXP57fXsK5PGVOF409/Z3yvk0ny39001seemjfyRy+tp5z0c1vepdJot52sd9UruIfLI5RHVMa3EHFpYQc22uDZx5x7Qumloo442OLJpXPtlFY5kXvnsHSq5peVSbv5b/wA5HMTy8TJqD399n/ucBQUVv9p9hVm4loyafYV1U1K0b0W4m77a7XEEsJtyjr9y1f5hQglrnPaW3HCLc7G18j32VYyc+lNnMzcNUmskkvm0vocs1x5bg8xyU+lKn6fjZgDmm4ux7HHbYqlE1lK3FckHCWkvoZFY6EdeWX0cHimXLxVivNT5sb5z/wBMA98qzzL4Rzw6V5kvZnRQfOu7EXikUtQoPnneji8UqmpJHff9F9kERFJAREQAREQAVHrTxYfTN8D1eKi1q4sPpm+B6pk6GaYutFO85rAlHnNYEpQ6B8kOSlanfOzdlneVDkOSl6mfOzdlneVfH1ozy/ps4zd8bd1H1VffCvKWsXvW6XqbU6RNOYHwM3oTh2/OkbfHvdrYWu+gfcuMbuQ6R87RfXn/AEl04SSjTOTPVexwEca9P1QfIKKJ0JGNjn5cHI7482z6CD61GZuT6QH72j+0n/SU2j3OtKxX3uop2X24Jqht+sCPNGTTki4t8xeeOck4tPfsdFpHWCumYY20wiDhhc/E15IORG3K/rX2SkZLCY3Pa17S1zC8OcxxAsWutnbYfUqgal6Z/ioft6j9NZfsbpn+Kh+3qP01TAlhnrU23tz9vkl33M1gnvruVqt65e1JEzROjSx76ionbI+z8LIw44nOBbdxwgC1+To2bFvgqZoXvdG1sgfgJDjaxYLA5W51U/sXpr+Lh9U9R+mvkupWmzsq4R/Xqf002+K1S1Sp7VVbUqaSS7NFJcNOqimnd2mrtqm3d3afqWtRVSyva57WxhmIANJ2v27b83/LroI65jrHf97AiLMAYS5shsMeLMGwGQsuHZqPpsbayE/16n9NZnUrTXJVwfb1P6aynkjJp7Kttl+UzTDjy4r5tvm3Xy9K9Dsausj+RaxzniPa45F1sPvy96o6rVene9z/AC5zcRJw70Ta5Jtt6VDpdUNLt41TE7rnqP01IfqxpW2U0A/rz/pK+LiHi3hKr9vyjPLinN1LHa/6r/MTNOOY2FrA4uDWxxh5GEvty2XOPerX9ktJG2OSnfb6U0x74lkdUK7/AMb7SX9JCyx9X/PoK5uEzzlej7fkpt8sF1O5+b78edtP4plWS6nVpBANN9rL+kuh1T0NNTB+/GLhNjaN7c53Fx3JxNb9JUzZIyjSZrwPC5seW5xpb9u3zLuD553o4fFKpqhwfPO9HD4pVMSaO2/x9kERFJAREQAREQAVDrXxIj/3m+B6vlC0rQNnidE4kXsQ4bWuBu1w9arNWmi0JaZJnJPK1krRUaL0oxxaIGzAbJGPjaHDns4ghav8v0t/B/eQfnSumXYf8yHdEqQ5KZqX87N2Wd5VQdHaW/g/vYPzLZoen0tBNvnkJexws9olpwbchF37R+PrUwTUk6ZXJKLg0mjv0UVtS+1zTTDovBl/esvKH/w833P503YjRIRad/f5iX7r86+767zMn3f5kWgo2ote+u81L/Z+Zfd8Pm3/ANnxRaDT/LM1Hmjc5wGItaAScJs5x5BfaAMzlnmM9t9m+Hzb/wC34rGS7hYxydYIaR6w66i0QkZRMIyuSOTFmR0X5fXmti0x8EWEcnWSHH1kuuV93w+af/Z8UJomv5ZtRat9f5qT7v8AMsd+f5mX7r8ym0Gk3otG/v8AMS/dfnWPlL/4eb7n86LRFElFH8pk/h5vbB+da31U2xtLKTzudA1o6yHk+wFRqQUbqc/LP6I4fe6VTlDoacsDnPOJ7zdxGQGVg1vQAO88qmIRLCIikgIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIJCIiCAiIgAiIgAiIgAiIgAiIgD/2Q==" alt=""/>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                <h2>Apple iPad Pro</h2> 
            </div>
            <div className="info-stock">
                In Stock
            </div>
            <div className="item-actions">
                <div className="item-quantity">
                  <select>
                      <option value="1">Qty: 1</option>
                      <option value="2">Qty: 2</option>
                      <option value="3">Qty: 3</option>
                      </select>  
                </div>
                <div className="items-actions-divider">|</div>
                <div className="item-delete">
                Delete
                </div>
            </div>
            </div>
            <div className="CartItem-price">
                $769.00
            </div>
        </div>
    )
}

export default CartItem